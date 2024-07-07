import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideHttpClient()]}

