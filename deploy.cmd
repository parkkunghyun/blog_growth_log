@echo off
setlocal EnableDelayedExpansion

REM Growth Log → Cloud Run (ax-project2026 / asia-northeast3)
REM frontend 폴더에서 실행: deploy.cmd

cd /d "%~dp0"

if not exist ".env.local" (
  echo .env.local 이 없습니다.
  exit /b 1
)

for /f "usebackq tokens=1,* delims==" %%A in (".env.local") do (
  if "%%A"=="NEXT_PUBLIC_SUPABASE_URL" set "NEXT_PUBLIC_SUPABASE_URL=%%B"
  if "%%A"=="NEXT_PUBLIC_SUPABASE_ANON_KEY" set "NEXT_PUBLIC_SUPABASE_ANON_KEY=%%B"
)

if "%NEXT_PUBLIC_SUPABASE_URL%"=="" (
  echo NEXT_PUBLIC_SUPABASE_URL 이 비어 있습니다.
  exit /b 1
)
if "%NEXT_PUBLIC_SUPABASE_ANON_KEY%"=="" (
  echo NEXT_PUBLIC_SUPABASE_ANON_KEY 이 비어 있습니다.
  exit /b 1
)

gcloud config set project ax-project2026
gcloud builds submit --config=cloudbuild.yaml --substitutions=_NEXT_PUBLIC_SUPABASE_URL="%NEXT_PUBLIC_SUPABASE_URL%",_NEXT_PUBLIC_SUPABASE_ANON_KEY="%NEXT_PUBLIC_SUPABASE_ANON_KEY%"

endlocal
