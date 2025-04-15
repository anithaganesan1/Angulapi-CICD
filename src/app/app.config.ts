import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AppInitService } from './app-init.service';

//export function initializeApp(appInitService:AppInitService) {
 //return () => appInitService.Init();
//}

export function initializeApp1(appInitService: AppInitService) {
  debugger
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),AppInitService,{ provide: APP_INITIALIZER,
    useFactory: initializeApp1,
    deps: [AppInitService],
    multi: true,
  },
  provideHttpClient()]
  };
