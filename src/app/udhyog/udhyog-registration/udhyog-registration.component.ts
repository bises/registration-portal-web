import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UdhyogService } from '../udhyog.service';
import { MyErrorStateMatcher } from '../../utilities/MyErrorStateMatcher';
import { MatDialog } from '@angular/material/dialog';
import { PersonModalComponent } from '../../persons/person-modal/person-modal.component';
import { Udhyog } from 'src/app/interfaces/Udhyog';
import { CompanyOwner } from 'src/app/interfaces/companyOwner';
import { CompanyLegalTypes } from 'src/app/interfaces/companyLegalTypes';
import { CompanyTypeObject } from 'src/app/interfaces/companyTypeObject';
import { CompanyTypesModalComponent } from 'src/app/company-types/company-types-modal/company-types-modal.component';
import { CompanyCategory } from 'src/app/interfaces/companyCategory';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-udhyog-registration',
  templateUrl: './udhyog-registration.component.html',
  styleUrls: ['./udhyog-registration.component.css']
})
export class UdhyogRegistrationComponent implements OnInit {

  public udhyog: Udhyog;

  public udhyogDartaFormGroup = new FormGroup({
    registrationNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
    registrationDate: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
      ]),
    companyName: new FormControl('', [
      Validators.required
    ]),
    companyCategory:new FormControl('', [
      Validators.required
    ]),
    companyType: new FormControl('', [
      Validators.required
    ]),
    companySubType: new FormControl('', [
      Validators.required
    ]),
    legalType: new FormControl('', [
      Validators.required
    ]),
    objective: new FormControl(),
    annualProduction: new FormControl('', [
      Validators.pattern('[0-9]*')
    ]),
    electricalPowerUsage: new FormControl(),
    contact: new FormControl(),
    revenue: new FormControl('', [
      Validators.pattern('[0-9]*')
    ]),
    panNumber: new FormControl(),
    nagarpalikaName: new FormControl('a]Nsf'),
    wadaNumber: new FormControl('', [
      Validators.pattern('[0-9]*')
    ]),
    areaNumber: new FormControl('', [
      Validators.pattern('[0-9]*')
    ]),
    maleWorkerNumber: new FormControl('', [
      Validators.pattern('[0-9]*')
    ]),
    femaleWorkerNumber: new FormControl('', [
      Validators.pattern('[0-9]*')
    ])
  });

  public owners: CompanyOwner[] = [];

  public matcher = new MyErrorStateMatcher();

  public udhyogTypes: string[] = [];
  public udhyogSubTypes: string[] = [];
  public udhyogCategories: string[] = CompanyCategory.CategoryList;
  public companyTypeObjects: CompanyTypeObject[] = [];
  public udhyogLegalTypes = CompanyLegalTypes.LegalTypes

  constructor(
    private udhyogService: UdhyogService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.udhyogService.getUdhyogCategories()
      .subscribe((data: CompanyTypeObject[]) => {
        if(data){
          this.companyTypeObjects = data;
          this.udhyogTypes = data.map(c => c.typeName);
        }
      });
  }

  openModal(): void {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      width: '570px',
      data: { }
    });

    dialogRef.afterClosed().subscribe((result: CompanyOwner | null) => {
      if(result){
        this.owners.push(result);
      }
    });
  }

  getSubtypes(){
    let selectedType = this.udhyogDartaFormGroup.value.companyType;
    if (selectedType) {
      var selectedTypeObject = this.companyTypeObjects.find(c => c.typeName === selectedType);
      if (selectedTypeObject) {
        this.udhyogSubTypes = selectedTypeObject.subTypes;
      }
    }
  }

  openModalForAddingUdhyogTypes() {
    const companyType: CompanyTypeObject = this.companyTypeObjects.find(c => c.typeName === this.udhyogDartaFormGroup.value.companyType);
    const dialogRef = this.dialog.open(CompanyTypesModalComponent, {
      width: '570px',
      data: { companyType }
    });

    dialogRef.afterClosed().subscribe((result: CompanyTypeObject | null) => {
      if(result){
        if(!companyType){
          this.companyTypeObjects.push(result);          
          this.udhyogTypes.push(result.typeName);          
          this.udhyogDartaFormGroup.patchValue({
            companyType: result.typeName
          });
        }        
        this.getSubtypes();
      }
    });
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.udhyogDartaFormGroup.controls[control].hasError(error);
  }

  public register(){
    this.spinner.show();
    let udhyog: Udhyog = {
      registrationNumber: this.udhyogDartaFormGroup.value.registrationNumber,
      registrationDate: new Date(this.udhyogDartaFormGroup.value.registrationDate),
      companyName: this.udhyogDartaFormGroup.value.companyName,
      legalType: this.udhyogDartaFormGroup.value.legalType,
      companyCategory: this.udhyogDartaFormGroup.value.companyCategory,
      companyType: this.udhyogDartaFormGroup.value.companyType,
      companySubType: this.udhyogDartaFormGroup.value.companySubType,
      objective: this.udhyogDartaFormGroup.value.objective,
      annualProduction: +this.udhyogDartaFormGroup.value.annualProduction,
      electricalPowerUsage: this.udhyogDartaFormGroup.value.electricalPowerUsage,
      contact: this.udhyogDartaFormGroup.value.contact,
      revenue: +this.udhyogDartaFormGroup.value.revenue,
      panNumber: this.udhyogDartaFormGroup.value.panNumber,
      companyAddress: {
        nagarpalikaName: this.udhyogDartaFormGroup.value.nagarpalikaName,
        wadaNumber: +this.udhyogDartaFormGroup.value.wadaNumber,
        areaNumber: +this.udhyogDartaFormGroup.value.areaNumber
      },
      workersDetail: {
        maleWorkerNumber: +this.udhyogDartaFormGroup.value.maleWorkerNumber,
        femaleWorkerNumber: +this.udhyogDartaFormGroup.value.femaleWorkerNumber
      },
      ownersDetail: this.owners,
    }
    this.udhyogService.saveUdhyog(udhyog)
      .subscribe((data: Udhyog) => {
        this.initilizeForm()
        this.spinner.hide();
        this.snackBar.open('Success', 'End Now', {
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          duration: 3000
        })
      });
  }

  initilizeForm() {
    // Add method to intialize the form
  }
}
