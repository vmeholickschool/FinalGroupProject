import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

<<<<<<< HEAD
import { routes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
=======
import { routes } from './app.routes'; 
>>>>>>> 0c35aeee253463e85e96223f4d0ad3311a573523

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule)
  ]
};

