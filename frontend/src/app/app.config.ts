import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // هذا السطر هو الذي كان يسبب الخطأ

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};