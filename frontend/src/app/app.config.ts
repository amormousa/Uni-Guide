import {
  ApplicationConfig,
  provideZoneChangeDetection,
  APP_INITIALIZER,
  inject,
  isDevMode,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import {
  provideHttpClient,
  withInterceptors,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { DOCUMENT } from '@angular/common';

import { langInterceptor } from './core/interceptors/lang.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/auth/jwt.interceptor';
import { TranslationLoader } from './i18n/loaders/translation-loader';
import { routes } from './app.routes';

export function initApp() {
  const doc = inject(DOCUMENT);
  return () =>
    new Promise<void>((resolve) => {
      // Initialize Language
      const lang = localStorage.getItem('futurepath_lang') || 'ar';
      doc.documentElement.lang = lang;
      doc.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

      // Initialize Theme
      const theme = localStorage.getItem('theme') || 'dark';
      doc.documentElement.setAttribute('data-theme', theme);
      doc.body.setAttribute('data-theme', theme);
      
      resolve();
    });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([langInterceptor, errorInterceptor])),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),

    provideTransloco({
      config: {
        availableLangs: ['ar', 'en', 'fr'],
        defaultLang: localStorage.getItem('futurepath_lang') || 'ar',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslationLoader,
    }),

    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
    },
  ],
};
