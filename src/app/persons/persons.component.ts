import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyErrorStateMatcher } from '../utilities/MyErrorStateMatcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Person } from '../interfaces/Person';
import { Cast } from '../interfaces/cast';
import { Gender } from '../interfaces/gender';
import { CompanyOwner } from '../interfaces/companyOwner';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  public matcher = new MyErrorStateMatcher();

  public genders = Gender.GenderList;

  public casts = Cast.CastsList;

  @Input() public owner: Person;

  @Output() save: EventEmitter<CompanyOwner> = new EventEmitter<CompanyOwner>();

  public ownerFormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    cast: new FormControl('', [
      Validators.required
    ]),
    citizenshipNumber: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    contactNumber: new FormControl('', [
      Validators.required
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    disability: new FormControl(false)
  });

  constructor() { }

  ngOnInit() {
    this.intializeForm();
  }

  intializeForm() {

  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.ownerFormGroup.controls[control].hasError(error);
  }

  onNoClick() {
    this.save.emit(null);
  }

  submit() {
    let companyOwner: CompanyOwner = {
      name: this.ownerFormGroup.value.name,
      cast: this.ownerFormGroup.value.cast,
      citizenShipNumber: this.ownerFormGroup.value.citizenshipNumber,
      gender: this.ownerFormGroup.value.gender,
      contact: this.ownerFormGroup.value.contactNumber,
      isDisable: this.ownerFormGroup.value.disability,
      address: this.ownerFormGroup.value.address
    }
    this.save.emit(companyOwner);
  }

}
