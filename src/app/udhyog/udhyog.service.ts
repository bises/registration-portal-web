import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CompanyTypeObject } from '../interfaces/companyTypeObject';
import { Udhyog } from '../interfaces/udhyog';

@Injectable({
  providedIn: 'root'
})
export class UdhyogService {
  getUdhyogByRegistrationNumber(registrationNumber: number): Observable<Udhyog> {
    let url = `https://iqi5ag4a93.execute-api.us-east-2.amazonaws.com/Prod/api/udhyog/${registrationNumber}`;
    return this.httpClient.get<Udhyog>(url);
  }

  constructor(private httpClient: HttpClient) { }

  getUdhyogCategories(): Observable<CompanyTypeObject[]> {
    let url = 'https://iqi5ag4a93.execute-api.us-east-2.amazonaws.com/Prod/api/udhyog/types';
    return this.httpClient.get<CompanyTypeObject[]>(url);
  }

  saveUdhyogType(comanyTypeObject: CompanyTypeObject): Observable<CompanyTypeObject> {
    let url = 'https://iqi5ag4a93.execute-api.us-east-2.amazonaws.com/Prod/api/udhyog/types';
    // let url = 'http://localhost:5000/api/udhyog/types'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    // let options = { headers: headers , responseType: 'text' as 'json'};
    let options = { headers: headers };
    return this.httpClient.put<any>(url, comanyTypeObject, options);
  }

  saveUdhyog(udhyog: Udhyog): Observable<Udhyog> {
    let url = 'https://iqi5ag4a93.execute-api.us-east-2.amazonaws.com/Prod/api/udhyog';
    // let url = 'http://localhost:5000/api/udhyog'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    // let options = { headers: headers , responseType: 'text' as 'json'};
    let options = { headers: headers };
    return this.httpClient.post<any>(url, udhyog, options);
  }

  getFilteredUdhyog(filterObject: any): Observable<Udhyog[]> {
    let url = 'https://iqi5ag4a93.execute-api.us-east-2.amazonaws.com/Prod/api/udhyog/filter';
    // let url = 'http://localhost:5000/api/udhyog/filter'
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    // let options = { headers: headers , responseType: 'text' as 'json'};
    let options = { headers: headers };
    let x = `[
      {
          "registrationNumber": "2",
          "registrationDate": "1111-01-01T04:56:02+00:00",
          "companyName": "from Web",
          "legalType": ";fdm]bf/L",
          "companyCategory": "#/]n",
          "companyType": "gof+ ju{",
          "companySubType": "23123 4",
          "objective": "aaklsdjlkajdj kajdka",
          "annualProduction": 12323,
          "electricalPowerUsage": "sldkjfklsjdf",
          "contact": "dklsdfjklsjdlfk",
          "revenue": 12334,
          "panNumber": "sdfsdfsdf",
          "companyAddress": {
              "nagarpalikaName": "a]Nsf",
              "wadaNumber": 1,
              "areaNumber": 34
          },
          "workersDetail": {
              "maleWorkerNumber": 2,
              "femaleWorkerNumber": 2,
              "totalWorker": 4
          },
          "ownersDetail": [
              {
                  "name": "ssdfsdf",
                  "gender": "dlxnf",
                  "cast": "hghftL",
                  "citizenShipNumber": "sdfsdf",
                  "address": "dasd",
                  "contact": "dfsdfs",
                  "isDisable": false
              }
          ],
          "renewDate": null,
          "assesIncreamentDate": null,
          "placeChangeDate": null,
          "ownerShipChangeDate": null,
          "closingDate": null,
          "objectiveChangeDate": null
      },
      {
          "registrationNumber": "1",
          "registrationDate": "1111-01-01T04:56:02+00:00",
          "companyName": "from Web",
          "legalType": ";fdm]bf/L",
          "companyCategory": "#/]n",
          "companyType": "gof+ ju{",
          "companySubType": "23123 4",
          "objective": "aaklsdjlkajdj kajdka",
          "annualProduction": 12323,
          "electricalPowerUsage": "sldkjfklsjdf",
          "contact": "dklsdfjklsjdlfk",
          "revenue": 12334,
          "panNumber": "sdfsdfsdf",
          "companyAddress": {
              "nagarpalikaName": "a]Nsf",
              "wadaNumber": 1,
              "areaNumber": 34
          },
          "workersDetail": {
              "maleWorkerNumber": 2,
              "femaleWorkerNumber": 2,
              "totalWorker": 4
          },
          "ownersDetail": [
              {
                  "name": "ssdfsdf",
                  "gender": "dlxnf",
                  "cast": "hghftL",
                  "citizenShipNumber": "sdfsdf",
                  "address": "dasd",
                  "contact": "dfsdfs",
                  "isDisable": false
              }
          ],
          "renewDate": null,
          "assesIncreamentDate": null,
          "placeChangeDate": null,
          "ownerShipChangeDate": null,
          "closingDate": null,
          "objectiveChangeDate": null
      },
      {
          "registrationNumber": "1234",
          "registrationDate": "1111-01-01T04:56:02+00:00",
          "companyName": "from Web",
          "legalType": ";fdm]bf/L",
          "companyCategory": "#/]n",
          "companyType": "gof+ ju{",
          "companySubType": "23123 4",
          "objective": "aaklsdjlkajdj kajdka",
          "annualProduction": 12323,
          "electricalPowerUsage": "sldkjfklsjdf",
          "contact": "dklsdfjklsjdlfk",
          "revenue": 12334,
          "panNumber": "sdfsdfsdf",
          "companyAddress": {
              "nagarpalikaName": "a]Nsf",
              "wadaNumber": 1,
              "areaNumber": 34
          },
          "workersDetail": {
              "maleWorkerNumber": 2,
              "femaleWorkerNumber": 2,
              "totalWorker": 4
          },
          "ownersDetail": [
              {
                  "name": "ssdfsdf",
                  "gender": "dlxnf",
                  "cast": "hghftL",
                  "citizenShipNumber": "sdfsdf",
                  "address": "dasd",
                  "contact": "dfsdfs",
                  "isDisable": false
              }
          ],
          "renewDate": null,
          "assesIncreamentDate": null,
          "placeChangeDate": null,
          "ownerShipChangeDate": null,
          "closingDate": null,
          "objectiveChangeDate": null
      }
  ]`
    // return of(JSON.parse(x));
    var y = JSON.stringify(filterObject);
    console.log(y)
    return this.httpClient.post<any>(url, y, options);
  }

  test(): Observable<string> {
    let url = 'https://localhost:44354/api/udhyog';
    return this.httpClient.get<string>(url);
  }
}
