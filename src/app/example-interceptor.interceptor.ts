import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize,Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { HttpHandler,HttpRequest,HttpEvent,HttpInterceptor } from '@angular/common/http';
@Injectable()

export class exampleInterceptorInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.loader.hide();
      }));
  }
}

//export const exampleInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
 // return next(req);
//};
