@echo off
setlocal EnableDelayedExpansion

REM Growth Log → Cloud Run (ax-project2026 / asia-northeast3)
REM frontend 폴더에서 실행: deploy.cmd
REM .env.local 은 git/Docker 에 포함되지 않습니다. GEMINI_API_KEY 는 빌드 후
REM Cloud Run 런타임 env 로만 주입합니다 (이미지·저장소에 들어가지 않음).

cd /d "%~dp0"

if not exist ".env.local" (
  echo .env.local 이 없습니다.
  exit /b 1
)

for /f "usebackq tokens=1,* delims==" %%A in (".env.local") do (
  if "%%A"=="NEXT_PUBLIC_SUPABASE_URL" set "NEXT_PUBLIC_SUPABASE_URL=%%B"
  if "%%A"=="NEXT_PUBLIC_SUPABASE_ANON_KEY" set "NEXT_PUBLIC_SUPABASE_ANON_KEY=%%B"
  if "%%A"=="GEMINI_API_KEY" set "GEMINI_API_KEY=%%B"
)

if "%NEXT_PUBLIC_SUPABASE_URL%"=="" (
  echo NEXT_PUBLIC_SUPABASE_URL 이 비어 있습니다.
  exit /b 1
)
if "%NEXT_PUBLIC_SUPABASE_ANON_KEY%"=="" (
  echo NEXT_PUBLIC_SUPABASE_ANON_KEY 이 비어 있습니다.
  exit /b 1
)
if "%GEMINI_API_KEY%"=="" (
  echo GEMINI_API_KEY 이 비어 있습니다. .env.local 에 추가하세요.
  exit /b 1
)

gcloud config set project ax-project2026
if errorlevel 1 exit /b 1

gcloud builds submit --config=cloudbuild.yaml --substitutions=_NEXT_PUBLIC_SUPABASE_URL="%NEXT_PUBLIC_SUPABASE_URL%",_NEXT_PUBLIC_SUPABASE_ANON_KEY="%NEXT_PUBLIC_SUPABASE_ANON_KEY%"
if errorlevel 1 exit /b 1

echo.
echo Injecting GEMINI_API_KEY into Cloud Run (runtime only, not in image)...
gcloud run services update growth-log --region=asia-northeast3 --update-env-vars=GEMINI_API_KEY=%GEMINI_API_KEY%
if errorlevel 1 exit /b 1

echo.
echo Deploy complete.
endlocal
