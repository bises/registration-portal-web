import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyErrorStateMatcher } from '../utilities/MyErrorStateMatcher';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Person } from '../interfaces/Person';
import { Cast } from '../interfaces/cast';
import { Gender } from '../interfaces/gender';

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

  @Output() save: EventEmitter<Person> = new EventEmitter<Person>();

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
    disability: new FormControl()
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
    this.save.emit(this.ownerFormGroup.value);
  }

}
