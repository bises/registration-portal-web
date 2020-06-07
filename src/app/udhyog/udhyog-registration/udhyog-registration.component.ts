import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UdhyogService } from '../udhyog.service';
import { UdhyogCategory } from '../../interfaces/UdhyogCategoy';
import { MyErrorStateMatcher } from '../../utilities/MyErrorStateMatcher';
import { MatDialog } from '@angular/material/dialog';
import { PersonModalComponent } from '../../persons/person-modal/person-modal.component';
import { Person } from 'src/app/interfaces/Person';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-udhyog-registration',
  templateUrl: './udhyog-registration.component.html',
  styleUrls: ['./udhyog-registration.component.css']
})
export class UdhyogRegistrationComponent implements OnInit {

  // public registrationFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern('[0-9]*')
  // ]);

  // public nepaliDateControl = new FormControl('', [
  //   Validators.required,
  //   Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
  // ]);

  // public maleWorkersControl = new FormControl('', [
  //   Validators.pattern('[0-9]*')
  // ]);

  // public femaleWorkersControl = new FormControl('', [
  //   Validators.pattern('[0-9]*')
  // ]);

  // public udhyogNameControl = new FormControl('', [
  //   Validators.required
  // ]);

  public udhyogDartaFormGroup = new FormGroup({
    registrationNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
    registrationDate: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
      ]),
    companyName: new FormControl(),
    companyType: new FormControl(),
    companySubType: new FormControl(),
    companyLegalType: new FormControl(),
    companyObjective: new FormControl(),
    yearlyRevenue: new FormControl(),
    electricPower: new FormControl(),
    companyContact: new FormControl(),
    revenue: new FormControl(),
    panNumber: new FormControl(),
    companyAddressNagarpalik: new FormControl(),
    companyAddressWada: new FormControl(),
    companyAddressChetra: new FormControl(),
    maleWorkersCount: new FormControl(),
    femaleWorkersCount: new FormControl()
  });

  public owners: Person[] = [];

  public matcher = new MyErrorStateMatcher();

  public udhyogCategories: UdhyogCategory[];

  constructor(
    private udhyogService: UdhyogService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.udhyogService.test().subscribe(data => console.log(data));
    this.udhyogService.getUdhyogCategories()
      .subscribe(data => this.udhyogCategories = data);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      width: '570px',
      data: { }
    });

    dialogRef.afterClosed().subscribe((result: Person) => {
      console.log(result);
      this.owners.push(result);
    });
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.udhyogDartaFormGroup.controls[control].hasError(error);
  }

}
