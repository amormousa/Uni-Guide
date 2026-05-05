#!/usr/bin/env bash
set -e

BASE_DIR="frontend"

echo "🏗️ Generating Angular 18+ project structure at ./${BASE_DIR}..."

# Create root config files
mkdir -p "$BASE_DIR"
touch "$BASE_DIR/angular.json"
touch "$BASE_DIR/tsconfig.json"
touch "$BASE_DIR/.eslintrc.json"
touch "$BASE_DIR/package.json"

# Core Module
mkdir -p "$BASE_DIR/src/app/core/{auth,interceptors,services,layout}"
touch "$BASE_DIR/src/app/core/auth/{auth.service.ts,auth.guard.ts,role.guard.ts,jwt.interceptor.ts}"
touch "$BASE_DIR/src/app/core/interceptors/{api.interceptor.ts,lang.interceptor.ts,error.interceptor.ts}"
touch "$BASE_DIR/src/app/core/services/{api.service.ts,analytics.service.ts,seo.service.ts}"
touch "$BASE_DIR/src/app/core/layout/{dir.service.ts,layout-direction.guard.ts}"

# i18n Module
mkdir -p "$BASE_DIR/src/app/i18n/{loaders,services,pipes,directives}"
touch "$BASE_DIR/src/app/i18n/loaders/{translation-loader.ts,server-translation.loader.ts}"
touch "$BASE_DIR/src/app/i18n/services/{i18n.service.ts,rtl.service.ts}"
touch "$BASE_DIR/src/app/i18n/pipes/{translate.pipe.ts,arabic-number.pipe.ts,rtl-date.pipe.ts}"
touch "$BASE_DIR/src/app/i18n/directives/{dir-aware.directive.ts,bidi-text.directive.ts}"

# Themes Module
mkdir -p "$BASE_DIR/src/app/themes/{tokens,services,material}"
touch "$BASE_DIR/src/app/themes/tokens/{colors.tokens.ts,typography.tokens.ts,spacing.tokens.ts}"
touch "$BASE_DIR/src/app/themes/services/theme.service.ts"
touch "$BASE_DIR/src/app/themes/material/{light.theme.ts,dark.theme.ts}"

# Store (NgRx/State)
mkdir -p "$BASE_DIR/src/app/store/{auth,ui,college,quiz}"
touch "$BASE_DIR/src/app/store/auth/{auth.actions.ts,auth.reducer.ts,auth.effects.ts,auth.selectors.ts}"
touch "$BASE_DIR/src/app/store/ui/{ui.actions.ts,ui.reducer.ts,ui.selectors.ts}"

# Shared Module
mkdir -p "$BASE_DIR/src/app/shared/components/{college-card,language-switcher,theme-toggle,loading-spinner,confirm-dialog,skeleton-loader,rtl-card}"
mkdir -p "$BASE_DIR/src/app/shared/{pipes,directives}"
touch "$BASE_DIR/src/app/shared/components/college-card/{college-card.component.ts,college-card.component.scss}"
touch "$BASE_DIR/src/app/shared/components/language-switcher/language-switcher.component.ts"
touch "$BASE_DIR/src/app/shared/components/theme-toggle/theme-toggle.component.ts"
touch "$BASE_DIR/src/app/shared/pipes/{arabic-number.pipe.ts,truncate.pipe.ts,safe-html.pipe.ts}"
touch "$BASE_DIR/src/app/shared/directives/{lazy-image.directive.ts,auto-dir.directive.ts,focus-trap.directive.ts}"

# Layouts
mkdir -p "$BASE_DIR/src/app/layouts/{main-layout,auth-layout,admin-layout}"
touch "$BASE_DIR/src/app/layouts/main-layout/{main-layout.component.ts,main-layout.component.scss}"
touch "$BASE_DIR/src/app/layouts/auth-layout/auth-layout.component.ts"
touch "$BASE_DIR/src/app/layouts/admin-layout/admin-layout.component.ts"

# Feature Modules
mkdir -p "$BASE_DIR/src/app/features/auth/{login,register,otp-verify}"
mkdir -p "$BASE_DIR/src/app/features/dashboard"
mkdir -p "$BASE_DIR/src/app/features/college-explorer/{college-list,college-detail,college-compare}"
mkdir -p "$BASE_DIR/src/app/features/quiz/{quiz-flow,quiz-results}"
mkdir -p "$BASE_DIR/src/app/features/ai-chat/message-bubble"
mkdir -p "$BASE_DIR/src/app/features/{salary-predictor,career-roadmap,parent-dashboard}"
mkdir -p "$BASE_DIR/src/app/features/admin/{analytics-panel,user-management,ai-monitor}"

touch "$BASE_DIR/src/app/features/dashboard/{dashboard.component.ts,dashboard.routes.ts}"
touch "$BASE_DIR/src/app/features/ai-chat/{ai-chat.component.ts,sse.service.ts}"

# Models & App Bootstrap
mkdir -p "$BASE_DIR/src/app/models"
touch "$BASE_DIR/src/app/models/{user.model.ts,college.model.ts,quiz.model.ts,i18n.model.ts}"
touch "$BASE_DIR/src/app/{app.routes.ts,app.config.ts,app.component.ts}"

# Assets
mkdir -p "$BASE_DIR/src/assets/i18n/{ar,en,fr}"
mkdir -p "$BASE_DIR/src/assets/fonts/{cairo,inter,ibm-plex-sans-arabic}"
mkdir -p "$BASE_DIR/src/assets/icons"

# Global Styles
mkdir -p "$BASE_DIR/src/styles"
touch "$BASE_DIR/src/styles/{_tokens.scss,_typography.scss,_mixins.scss,_rtl.scss,_dark.scss,_a11y.scss,styles.scss}"

# Environments
mkdir -p "$BASE_DIR/src/environments"
touch "$BASE_DIR/src/environments/{environment.ts,environment.prod.ts,environment.staging.ts}"

echo "✅ Structure generated successfully."
echo "📂 Navigate to it: cd $BASE_DIR"