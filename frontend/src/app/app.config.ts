import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER, inject, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { DOCUMENT } from '@angular/common';

import { langInterceptor } from './core/interceptors/lang.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { TranslationLoader } from './i18n/loaders/translation-loader';
import { routes } from './app.routes'; 

export function initApp() {
  const doc = inject(DOCUMENT);
  return () => new Promise<void>((resolve) => {
    const lang = localStorage.getItem('uniguide_lang') || 'ar';
    doc.documentElement.lang = lang;
    doc.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    resolve();
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([langInterceptor, errorInterceptor])),
    provideRouter(routes),
    
    provideTransloco({
      config: {
        availableLangs: ['ar', 'en', 'fr'],
        defaultLang: 'ar',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslationLoader
    }),

    { 
      provide: APP_INITIALIZER, 
      useFactory: initApp, 
      multi: true 
    },
  ],
};