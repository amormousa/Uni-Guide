@echo off
setlocal enabledelayedexpansion
echo ================================================
echo    Creating GitHub Workflows + Infrastructure Structure...
echo ================================================

set BASE=.

:: GitHub Workflows
mkdir "%BASE%\.github\workflows" 2>nul

type nul > "%BASE%\.github\workflows\ci.yml"
type nul > "%BASE%\.github\workflows\cd-frontend.yml"
type nul > "%BASE%\.github\workflows\cd-backend.yml"
type nul > "%BASE%\.github\workflows\cd-ai.yml"

:: Infra folder
mkdir "%BASE%\infra\terraform" 2>nul
mkdir "%BASE%\infra\docker" 2>nul
mkdir "%BASE%\infra\nginx" 2>nul

:: Terraform
type nul > "%BASE%\infra\terraform\main.tf"
type nul > "%BASE%\infra\terraform\variables.tf"
type nul > "%BASE%\infra\terraform\outputs.tf"

:: Docker
type nul > "%BASE%\infra\docker\docker-compose.yml"
type nul > "%BASE%\infra\docker\Dockerfile.backend"
type nul > "%BASE%\infra\docker\Dockerfile.frontend"
type nul > "%BASE%\infra\docker\Dockerfile.ai"

:: Nginx
type nul > "%BASE%\infra\nginx\nginx.conf"
type nul > "%BASE%\infra\nginx\i18n-cache.conf"

echo.
echo ================================================
echo ✅ Infrastructure + CI/CD structure created successfully!
echo ================================================
echo.
echo Folders created:
echo   - .github/workflows/
echo   - infra/terraform/
echo   - infra/docker/
echo   - infra/nginx/
echo.
pause