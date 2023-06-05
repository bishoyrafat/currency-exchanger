import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {

  constructor(private toastr:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    return next.handle(request).pipe(
      tap((res:any)=>{
      if(res.body?.error?.type==='usage_limit_reached'){
        this.toastr.warning('Please update access key')
      }

      if(res.body?.error?.type==='invalid_access_key'){
        this.toastr.warning('Invalid access key')
      }
      })
,
      catchError((error: any,res:any) => {
        if(!error.ok){
          this.toastr.error(error.statusText)
        }
        return throwError((err: any)=>err)
      })
  )
  }

}
