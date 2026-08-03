@echo off
setlocal EnableDelayedExpansion

REM Growth Log -> Cloud Run (ax-project2026 / asia-northeast3)
REM Run from frontend folder: deploy.cmd
REM .env.local is gitignored and dockerignored.
REM GEMINI_API_KEY is injected as Cloud Run runtime env only (not baked into image).

cd /d "%~dp0"

if not exist ".env.local" (
  echo ERROR: .env.local not found.
  exit /b 1
)

for /f "usebackq tokens=1,* delims==" %%A in (".env.local") do (
  if "%%A"=="NEXT_PUBLIC_SUPABASE_URL" set "NEXT_PUBLIC_SUPABASE_URL=%%B"
  if "%%A"=="NEXT_PUBLIC_SUPABASE_ANON_KEY" set "NEXT_PUBLIC_SUPABASE_ANON_KEY=%%B"
  if "%%A"=="GEMINI_API_KEY" set "GEMINI_API_KEY=%%B"
)

if "%NEXT_PUBLIC_SUPABASE_URL%"=="" (
  echo ERROR: NEXT_PUBLIC_SUPABASE_URL is empty.
  exit /b 1
)
if "%NEXT_PUBLIC_SUPABASE_ANON_KEY%"=="" (
  echo ERROR: NEXT_PUBLIC_SUPABASE_ANON_KEY is empty.
  exit /b 1
)
if "%GEMINI_API_KEY%"=="" (
  echo ERROR: GEMINI_API_KEY is empty. Add it to .env.local.
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
