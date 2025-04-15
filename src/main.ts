import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { AppInitService } from './app/app-init.service';

export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => { 
    return appInitService.Init();
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
