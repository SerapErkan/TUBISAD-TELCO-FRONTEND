import { Injectable } from '@angular/core';
import{finalize}from 'rxjs'
import { Observable } from 'rxjs';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LoadingService } from 'src/app/services/loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // console.log('Interceptors çalıştı')
    // return next.handle(request).pipe(finalize(()=>{
    //   console.log('istek bitti');
    // }))

    
    this.loadingService.startLoading();
    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          this.loadingService.stopLoading();
        }, 3000);
      })
    );
    
  }
}
