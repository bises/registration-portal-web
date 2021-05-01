import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyCategory } from '../../interfaces/companyCategory';
import { CompanyLegalTypes } from '../../interfaces/companyLegalTypes';
import { UdhyogService } from '../udhyog.service';
import { CompanyTypeObject } from '../../interfaces/companyTypeObject';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Udhyog } from 'src/app/interfaces/Udhyog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MyErrorStateMatcher } from '../../utilities/MyErrorStateMatcher';

@Component({
  selector: 'app-udhyog-search',
  templateUrl: './udhyog-search.component.html',
  styleUrls: ['./udhyog-search.component.css']
})
export class UdhyogSearchComponent implements OnInit {

  public udhyogCategories: string[] = CompanyCategory.CategoryList;
  public udhyogLegalTypes = CompanyLegalTypes.LegalTypes
  companyTypeObjects: CompanyTypeObject[];
  udhyogTypes: string[];
  udhyogSubTypes: string[];
  public matcher = new MyErrorStateMatcher();
  public panelOpenState = false;

  public udhyogFilterFormGroup = new FormGroup({
    CompanyCategory: new FormControl(''),
    CompanyType: new FormControl(''),
    CompanySubType: new FormControl(''),
    LegalType: new FormControl(''),
    RegistrationDate_From: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    RegistrationDate_To: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    RenewDate_From: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    RenewDate_To: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    AssetChangeDate_From: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    AssetChangeDate_To: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    LocationChangeDate_From: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    LocationChangeDate_To: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    ObjectiveChangeDate_From: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    ObjectiveChangeDate_To: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    OwnershipChangeDate_From: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
    OwnershipChangeDate_To: new FormControl('', [
      Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
    ]),
  });
  
  udhyogDataSource: any;
  displayedColumns: string[];
  udhyogMapping: any;  

  @ViewChild(MatSort, {static: true}) sort: MatSort; 

  constructor(private udhyogService: UdhyogService) { }

  ngOnInit() {    
    this.udhyogService.getUdhyogCategories()
      .subscribe((data: CompanyTypeObject[]) => {
        if (data) {
          this.companyTypeObjects = data;
          this.udhyogTypes = data.map(c => c.typeName);
        }
      });
  }

  getSubtypes() {
    let selectedType = this.udhyogFilterFormGroup.value.companyType;
    if (selectedType) {
      var selectedTypeObject = this.companyTypeObjects.find(c => c.typeName === selectedType);
      if (selectedTypeObject) {
        this.udhyogSubTypes = selectedTypeObject.subTypes;
      }
    }
  }

  search(){
    var filterObject = this.udhyogFilterFormGroup.value;
    for (var property in filterObject){
      if(!filterObject[property]){
        delete filterObject[property]
      } else if(property.includes("Date")){
        filterObject[property] = new Date(filterObject[property]);
      }
    }
    this.udhyogService.getFilteredUdhyog(filterObject)
    .subscribe((udhyog: Udhyog[]) => {
      this.udhyogDataSource = new MatTableDataSource(udhyog);
      this.udhyogDataSource.sort = this.sort;
      this.udhyogMapping = Udhyog.getMappingEnglishToNepali();
      this.displayedColumns = Object.getOwnPropertyNames(Udhyog.getMappingNepaliToEnglish());
    });
  }

}
