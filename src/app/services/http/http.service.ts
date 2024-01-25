import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ExceptionHandler } from "src/app/shared/Exception_Handler";

@Injectable({
  providedIn: 'root'
})
@ExceptionHandler
export class HttpService {

  constructor(private http : HttpClient) { }

  postAPICall()
  {
    return this.http.post<Observable<any>>('https://jsonplaceholder.typicode.com/users',{});
  }

}
