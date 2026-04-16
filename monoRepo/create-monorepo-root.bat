@echo off
setlocal enabledelayedexpansion
echo ================================================
echo    Creating Uniguide Monorepo Root Structure...
echo ================================================

set BASE=uniguide

:: Create root folder
mkdir "%BASE%" 2>nul
cd "%BASE%"

:: Root config files
type nul > ".gitignore"
type nul > ".editorconfig"
type nul > "commitlint.config.js"
type nul > "nx.json"
type nul > "package.json"

:: Shared folder (NEW)
mkdir "shared\types" 2>nul
mkdir "shared\constants" 2>nul

type nul > "shared\types\user.types.ts"
type nul > "shared\types\college.types.ts"
type nul > "shared\types\i18n.types.ts"
type nul > "shared\constants\supported-locales.ts"

:: Docs folder (NEW)
mkdir "docs" 2>nul
type nul > "docs\architecture.md"
type nul > "docs\i18n-guide.md"
type nul > "docs\theme-guide.md"
type nul > "docs\ai-prompting.md"

echo.
echo ================================================
echo ✅ Uniguide Monorepo root structure created successfully!
echo ================================================
echo.
echo Location: %CD%
echo.
echo Now you can run the other structure scripts inside their folders:
echo   - create-frontend-structure.bat       (inside frontend/)
echo   - create-backend-structure.bat        (inside backend/)
echo   - create-ai-service-structure.bat     (inside ai-service/)
echo   - create-infra-structure.bat          (in root)
echo.
pause