import { Component, OnInit } from '@angular/core';
import { NepaliDateService } from 'src/app/utilities/nepali-date.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  providers: [NepaliDateService]
})
export class CertificateComponent implements OnInit {

  constructor(private nepaliDateService: NepaliDateService) { }

  public udhyog = JSON.parse(`{
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
}`);

  public todayDateInBS

  ngOnInit() {
    this.nepaliDateService.getTodayDate().subscribe(x => {
      let y = x;
    })
  }

}
