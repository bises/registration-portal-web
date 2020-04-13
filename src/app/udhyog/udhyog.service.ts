import { Injectable } from '@angular/core';
import { UdhyogCategory } from '../interfaces/UdhyogCategoy';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UdhyogService {

  constructor(private httpClient: HttpClient) { }

  getUdhyogCategories(): Observable<UdhyogCategory[]> {
    let x: UdhyogCategory[] = [
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'd' },
      { id: 5, name: 'e' },
    ];
    return of(x);;
  }

  test(): Observable<string> {
    let url = 'https://localhost:44354/api/udhyog';
    return this.httpClient.get<string>(url);
  }
}
