import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Udhyog } from '../interfaces/Udhyog';
import { CompanyTypeObject } from '../interfaces/companyTypeObject';

@Injectable({
  providedIn: 'root'
})
export class UdhyogService {

  constructor(private httpClient: HttpClient) { }

  getUdhyogCategories(): Observable<CompanyTypeObject[]> {
    let subTypesa = ['a', 'b', 'c', 'd', 'e'];
    let companyTypeObject: CompanyTypeObject[] = [
      {
        typeName: 'a',
        subTypes: subTypesa
      },
      {
        typeName: 'b',
        subTypes: subTypesa
      }
    ]
    return of(companyTypeObject);
  }

  saveUdhyog(udhyog: Udhyog): Observable<any> {
    // let url = 'https://iqi5ag4a93.execute-api.us-east-2.amazonaws.com/Prod/api/udhyog';
    let url = 'http://localhost:5000/api/udhyog'
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    // let options = { headers: headers , responseType: 'text' as 'json'};
    let options = { headers: headers };
    return this.httpClient.post<any>(url, udhyog, options);
  }

  test(): Observable<string> {
    let url = 'https://localhost:44354/api/udhyog';
    return this.httpClient.get<string>(url);
  }
}
