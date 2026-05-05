@echo off
setlocal enabledelayedexpansion
echo ================================================
echo    Creating AI Service (FastAPI) Structure...
echo ================================================

set BASE=.

:: Root files
type nul > "%BASE%\requirements.txt"
type nul > "%BASE%\Dockerfile"
type nul > "%BASE%\.env.example"

:: app structure
mkdir "%BASE%\app\api\v1" 2>nul
mkdir "%BASE%\app\core" 2>nul
mkdir "%BASE%\app\services" 2>nul
mkdir "%BASE%\app\models\ml" 2>nul
mkdir "%BASE%\app\prompts" 2>nul

type nul > "%BASE%\app\main.py"

:: API routes
type nul > "%BASE%\app\api\v1\routes_chat.py"
type nul > "%BASE%\app\api\v1\routes_quiz.py"
type nul > "%BASE%\app\api\v1\routes_salary.py"
type nul > "%BASE%\app\api\v1\routes_roadmap.py"
type nul > "%BASE%\app\api\deps.py"

:: Core
type nul > "%BASE%\app\core\config.py"
type nul > "%BASE%\app\core\security.py"
type nul > "%BASE%\app\core\logging.py"

:: Services
type nul > "%BASE%\app\services\rag_service.py"
type nul > "%BASE%\app\services\recommendation.py"
type nul > "%BASE%\app\services\salary_model.py"
type nul > "%BASE%\app\services\lang_router.py"
type nul > "%BASE%\app\services\stream_handler.py"

:: Models
type nul > "%BASE%\app\models\schemas.py"

:: ML models (empty files - you will replace with actual .pkl later)
type nul > "%BASE%\app\models\ml\salary_xgboost.pkl"
type nul > "%BASE%\app\models\ml\personality_classifier.pkl"

:: Prompts
type nul > "%BASE%\app\prompts\chat.ar.txt"
type nul > "%BASE%\app\prompts\chat.en.txt"
type nul > "%BASE%\app\prompts\recommendation.ar.txt"
type nul > "%BASE%\app\prompts\recommendation.en.txt"

:: Tests
mkdir "%BASE%\tests" 2>nul
type nul > "%BASE%\tests\test_chat.py"
type nul > "%BASE%\tests\test_salary.py"

echo.
echo ================================================
echo ✅ AI Service (FastAPI) structure created successfully!
echo ================================================
echo.
echo Current directory: %CD%
echo You can now open the "ai-service" folder in VS Code or PyCharm.
pause