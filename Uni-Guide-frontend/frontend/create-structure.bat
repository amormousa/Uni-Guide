@echo off
setlocal enabledelayedexpansion
echo ================================================
echo    Creating Angular Project Structure...
echo ================================================

set BASE=.

:: Root files
type nul > "%BASE%\angular.json"
type nul > "%BASE%\tsconfig.json"
type nul > "%BASE%\.eslintrc.json"
type nul > "%BASE%\package.json"

:: Core
mkdir "%BASE%\src\app\core\auth" 2>nul
mkdir "%BASE%\src\app\core\interceptors" 2>nul
mkdir "%BASE%\src\app\core\services" 2>nul
mkdir "%BASE%\src\app\core\layout" 2>nul

type nul > "%BASE%\src\app\core\auth\auth.service.ts"
type nul > "%BASE%\src\app\core\auth\auth.guard.ts"
type nul > "%BASE%\src\app\core\auth\role.guard.ts"
type nul > "%BASE%\src\app\core\auth\jwt.interceptor.ts"

type nul > "%BASE%\src\app\core\interceptors\api.interceptor.ts"
type nul > "%BASE%\src\app\core\interceptors\lang.interceptor.ts"
type nul > "%BASE%\src\app\core\interceptors\error.interceptor.ts"

type nul > "%BASE%\src\app\core\services\api.service.ts"
type nul > "%BASE%\src\app\core\services\analytics.service.ts"
type nul > "%BASE%\src\app\core\services\seo.service.ts"

type nul > "%BASE%\src\app\core\layout\dir.service.ts"
type nul > "%BASE%\src\app\core\layout\layout-direction.guard.ts"

:: i18n
mkdir "%BASE%\src\app\i18n\loaders" 2>nul
mkdir "%BASE%\src\app\i18n\services" 2>nul
mkdir "%BASE%\src\app\i18n\pipes" 2>nul
mkdir "%BASE%\src\app\i18n\directives" 2>nul

type nul > "%BASE%\src\app\i18n\loaders\translation-loader.ts"
type nul > "%BASE%\src\app\i18n\loaders\server-translation.loader.ts"
type nul > "%BASE%\src\app\i18n\services\i18n.service.ts"
type nul > "%BASE%\src\app\i18n\services\rtl.service.ts"
type nul > "%BASE%\src\app\i18n\pipes\translate.pipe.ts"
type nul > "%BASE%\src\app\i18n\pipes\arabic-number.pipe.ts"
type nul > "%BASE%\src\app\i18n\pipes\rtl-date.pipe.ts"
type nul > "%BASE%\src\app\i18n\directives\dir-aware.directive.ts"
type nul > "%BASE%\src\app\i18n\directives\bidi-text.directive.ts"

:: Themes
mkdir "%BASE%\src\app\themes\tokens" 2>nul
mkdir "%BASE%\src\app\themes\services" 2>nul
mkdir "%BASE%\src\app\themes\material" 2>nul

type nul > "%BASE%\src\app\themes\tokens\colors.tokens.ts"
type nul > "%BASE%\src\app\themes\tokens\typography.tokens.ts"
type nul > "%BASE%\src\app\themes\tokens\spacing.tokens.ts"
type nul > "%BASE%\src\app\themes\services\theme.service.ts"
type nul > "%BASE%\src\app\themes\material\light.theme.ts"
type nul > "%BASE%\src\app\themes\material\dark.theme.ts"

:: Store
mkdir "%BASE%\src\app\store\auth" 2>nul
mkdir "%BASE%\src\app\store\ui" 2>nul
mkdir "%BASE%\src\app\store\college" 2>nul
mkdir "%BASE%\src\app\store\quiz" 2>nul

type nul > "%BASE%\src\app\store\auth\auth.actions.ts"
type nul > "%BASE%\src\app\store\auth\auth.reducer.ts"
type nul > "%BASE%\src\app\store\auth\auth.effects.ts"
type nul > "%BASE%\src\app\store\auth\auth.selectors.ts"
type nul > "%BASE%\src\app\store\ui\ui.actions.ts"
type nul > "%BASE%\src\app\store\ui\ui.reducer.ts"
type nul > "%BASE%\src\app\store\ui\ui.selectors.ts"

:: Shared
mkdir "%BASE%\src\app\shared\components\college-card" 2>nul
mkdir "%BASE%\src\app\shared\components\language-switcher" 2>nul
mkdir "%BASE%\src\app\shared\components\theme-toggle" 2>nul
mkdir "%BASE%\src\app\shared\components\loading-spinner" 2>nul
mkdir "%BASE%\src\app\shared\components\confirm-dialog" 2>nul
mkdir "%BASE%\src\app\shared\components\skeleton-loader" 2>nul
mkdir "%BASE%\src\app\shared\components\rtl-card" 2>nul
mkdir "%BASE%\src\app\shared\pipes" 2>nul
mkdir "%BASE%\src\app\shared\directives" 2>nul

type nul > "%BASE%\src\app\shared\components\college-card\college-card.component.ts"
type nul > "%BASE%\src\app\shared\components\college-card\college-card.component.scss"
type nul > "%BASE%\src\app\shared\components\language-switcher\language-switcher.component.ts"
type nul > "%BASE%\src\app\shared\components\theme-toggle\theme-toggle.component.ts"
type nul > "%BASE%\src\app\shared\pipes\arabic-number.pipe.ts"
type nul > "%BASE%\src\app\shared\pipes\truncate.pipe.ts"
type nul > "%BASE%\src\app\shared\pipes\safe-html.pipe.ts"
type nul > "%BASE%\src\app\shared\directives\lazy-image.directive.ts"
type nul > "%BASE%\src\app\shared\directives\auto-dir.directive.ts"
type nul > "%BASE%\src\app\shared\directives\focus-trap.directive.ts"

:: Layouts
mkdir "%BASE%\src\app\layouts\main-layout" 2>nul
mkdir "%BASE%\src\app\layouts\auth-layout" 2>nul
mkdir "%BASE%\src\app\layouts\admin-layout" 2>nul

type nul > "%BASE%\src\app\layouts\main-layout\main-layout.component.ts"
type nul > "%BASE%\src\app\layouts\main-layout\main-layout.component.scss"
type nul > "%BASE%\src\app\layouts\auth-layout\auth-layout.component.ts"
type nul > "%BASE%\src\app\layouts\admin-layout\admin-layout.component.ts"

:: Features
mkdir "%BASE%\src\app\features\auth\login" 2>nul
mkdir "%BASE%\src\app\features\auth\register" 2>nul
mkdir "%BASE%\src\app\features\auth\otp-verify" 2>nul
mkdir "%BASE%\src\app\features\dashboard" 2>nul
mkdir "%BASE%\src\app\features\college-explorer\college-list" 2>nul
mkdir "%BASE%\src\app\features\college-explorer\college-detail" 2>nul
mkdir "%BASE%\src\app\features\college-explorer\college-compare" 2>nul
mkdir "%BASE%\src\app\features\quiz\quiz-flow" 2>nul
mkdir "%BASE%\src\app\features\quiz\quiz-results" 2>nul
mkdir "%BASE%\src\app\features\ai-chat\message-bubble" 2>nul
mkdir "%BASE%\src\app\features\salary-predictor" 2>nul
mkdir "%BASE%\src\app\features\career-roadmap" 2>nul
mkdir "%BASE%\src\app\features\parent-dashboard" 2>nul
mkdir "%BASE%\src\app\features\admin\analytics-panel" 2>nul
mkdir "%BASE%\src\app\features\admin\user-management" 2>nul
mkdir "%BASE%\src\app\features\admin\ai-monitor" 2>nul

type nul > "%BASE%\src\app\features\dashboard\dashboard.component.ts"
type nul > "%BASE%\src\app\features\dashboard\dashboard.routes.ts"
type nul > "%BASE%\src\app\features\ai-chat\ai-chat.component.ts"
type nul > "%BASE%\src\app\features\ai-chat\sse.service.ts"

:: Models & App files
mkdir "%BASE%\src\app\models" 2>nul
type nul > "%BASE%\src\app\models\user.model.ts"
type nul > "%BASE%\src\app\models\college.model.ts"
type nul > "%BASE%\src\app\models\quiz.model.ts"
type nul > "%BASE%\src\app\models\i18n.model.ts"

type nul > "%BASE%\src\app\app.routes.ts"
type nul > "%BASE%\src\app\app.config.ts"
type nul > "%BASE%\src\app\app.component.ts"

:: Assets
mkdir "%BASE%\src\assets\i18n\ar" 2>nul
mkdir "%BASE%\src\assets\i18n\en" 2>nul
mkdir "%BASE%\src\assets\i18n\fr" 2>nul
mkdir "%BASE%\src\assets\fonts\cairo" 2>nul
mkdir "%BASE%\src\assets\fonts\inter" 2>nul
mkdir "%BASE%\src\assets\fonts\ibm-plex-sans-arabic" 2>nul
mkdir "%BASE%\src\assets\icons" 2>nul

:: Styles
mkdir "%BASE%\src\styles" 2>nul
type nul > "%BASE%\src\styles\_tokens.scss"
type nul > "%BASE%\src\styles\_typography.scss"
type nul > "%BASE%\src\styles\_mixins.scss"
type nul > "%BASE%\src\styles\_rtl.scss"
type nul > "%BASE%\src\styles\_dark.scss"
type nul > "%BASE%\src\styles\_a11y.scss"
type nul > "%BASE%\src\styles\styles.scss"

:: Environments
mkdir "%BASE%\src\environments" 2>nul
type nul > "%BASE%\src\environments\environment.ts"
type nul > "%BASE%\src\environments\environment.prod.ts"
type nul > "%BASE%\src\environments\environment.staging.ts"

echo.
echo ================================================
echo ✅ Angular project structure created successfully!
echo ================================================
echo.
echo Current directory: %CD%
echo You can now open the "frontend" folder in VS Code.
pause