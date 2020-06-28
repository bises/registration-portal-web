import { Component, OnInit, Inject } from '@angular/core';
import { CompanyTypeObject } from 'src/app/interfaces/companyTypeObject';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonModalComponent } from 'src/app/persons/person-modal/person-modal.component';

@Component({
  selector: 'app-company-types-modal',
  templateUrl: './company-types-modal.component.html',
  styleUrls: ['./company-types-modal.component.css']
})
export class CompanyTypesModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PersonModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  submit(event: CompanyTypeObject): void {
    this.dialogRef.close(event);
  }

}
