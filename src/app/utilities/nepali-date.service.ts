import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NepaliDateService {

  constructor(private httpClient: HttpClient) { }

  getTodayDate(): Observable<any> {
    const url = "http://rajanmaharjan.com.np/getdate/index.php?dateType=np";
    return this.httpClient.jsonp<any>(url, 'callback').pipe(
      map(res=>res),
      tap(res=>console.log(res)));
  }
}
