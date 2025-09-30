import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding() //este se usa para traer los parametros de ruta sin necesidad de inyectar Router()
      /*
        ahora se puede usar de la siguiente manera: 
        supongamos que se tiene la ruta:
           /users/:id
        en el componente .ts se puede recuperar el dato
        @Input() id: string

      */
    ), 
    provideHttpClient(
      withFetch(),//Se define la manera nativa de realizar las consultas http
      withInterceptors(
        [ ]
      ),
      //withInterceptorsFromDi() // sirve para habilitar antigos interceptores como los de jwt module
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideClientHydration(withEventReplay())
  ]
};
