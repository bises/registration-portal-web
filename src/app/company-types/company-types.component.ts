import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/utilities/MyErrorStateMatcher';
import { CompanyTypeObject } from 'src/app/interfaces/companyTypeObject';

@Component({
  selector: 'app-company-types',
  templateUrl: './company-types.component.html',
  styleUrls: ['./company-types.component.css']
})
export class CompanyTypesComponent implements OnInit {

  @Input() public companyTypes: string;
  @Input() public companyTypeObject: CompanyTypeObject[];

  @Output() save: EventEmitter<CompanyTypeObject> = new EventEmitter<CompanyTypeObject>();

  public companySubTypes: string[] = [];
  public matcher = new MyErrorStateMatcher();

  public typesFormGroup = new FormGroup({
    types: new FormControl('', [
      Validators.required
    ]),
    subTypes: new FormControl('', [
      Validators.required
    ])
  })

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  getSubTypes(event: any){
    console.log(event);
  }

  addSubType(){
    this.companySubTypes.push(this.typesFormGroup.value.subTypes);
    this.cdRef.detectChanges();
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.typesFormGroup.controls[control].hasError(error);
  }

  submit(){
    let comanyTypeObject: CompanyTypeObject = {
      typeName: this.typesFormGroup.value.types,
      subTypes: this.companySubTypes
    }
    this.save.emit(comanyTypeObject);
  }

  onNoClick() {
    this.save.emit(null);
  }
}
