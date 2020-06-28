import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/utilities/MyErrorStateMatcher';
import { CompanyTypeObject } from 'src/app/interfaces/companyTypeObject';
import { UdhyogService } from '../udhyog/udhyog.service';

@Component({
  selector: 'app-company-types',
  templateUrl: './company-types.component.html',
  styleUrls: ['./company-types.component.css']
})
export class CompanyTypesComponent implements OnInit {

  @Input() public companyType: CompanyTypeObject;
  @Input() public companyTypeObject: CompanyTypeObject[];

  @Output() save: EventEmitter<CompanyTypeObject> = new EventEmitter<CompanyTypeObject>();

  public companySubTypes: string[] = [];
  public matcher = new MyErrorStateMatcher();
  public isAddingCategories = false;

  public typesFormGroup = new FormGroup({
    types: new FormControl('', [
      Validators.required
    ]),
    subTypes: new FormControl('')
  })

  constructor(private cdRef: ChangeDetectorRef,
    private udhyogService: UdhyogService) { }

  ngOnInit() {
    if(this.companyType){
      this.typesFormGroup.patchValue({
        types: this.companyType.typeName
      });
      this.typesFormGroup.controls["types"].disable();
      this.companySubTypes = this.companyType.subTypes
      this.isAddingCategories = true;
    }
  }

  getSubTypes(event: any){
    console.log(event);
  }

  addSubType(){
    this.companySubTypes.push(this.typesFormGroup.value.subTypes);
    this.typesFormGroup.controls["subTypes"].setValue("");
    this.cdRef.detectChanges();
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.typesFormGroup.controls[control].hasError(error);
  }

  submit(){
    let comanyTypeObject: CompanyTypeObject = {
      typeName: this.typesFormGroup.controls["types"].value,
      subTypes: this.companySubTypes,
      nagarpalikaName: 'a]Nsf'
    }
    this.udhyogService.saveUdhyogType(comanyTypeObject)
    .subscribe(data => {      
      this.save.emit(data);
    })
  }

  onNoClick() {
    this.save.emit(null);
  }
}
