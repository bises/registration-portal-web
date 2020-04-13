import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UdhyogService } from '../udhyog.service';
import { UdhyogCategory } from '../../interfaces/UdhyogCategoy';
import { MyErrorStateMatcher } from '../../utilities/MyErrorStateMatcher';
import { MatDialog } from '@angular/material/dialog';
import { PersonModalComponent } from '../../persons/person-modal/person-modal.component';

@Component({
  selector: 'app-udhyog-registration',
  templateUrl: './udhyog-registration.component.html',
  styleUrls: ['./udhyog-registration.component.css']
})
export class UdhyogRegistrationComponent implements OnInit {

  public registrationFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*')
  ]);

  public nepaliDateControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{4}\.[0-9]{1,2}\.[0-9]{1,2}')
  ]);

  public maleWorkersControl = new FormControl('', [
    Validators.pattern('[0-9]*')
  ]);

  public femaleWorkersControl = new FormControl('', [
    Validators.pattern('[0-9]*')
  ]);

  public udhyogNameControl = new FormControl('', [
    Validators.required
  ]);

  public matcher = new MyErrorStateMatcher();

  public udhyogCategories: UdhyogCategory[];

  constructor(
    private udhyogService: UdhyogService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    //this.udhyogService.test().subscribe(data => console.log(data));
    this.udhyogService.getUdhyogCategories()
      .subscribe(data => this.udhyogCategories = data);
  }

  openModal(): void {
    const dialogRef = this.dialog.open(PersonModalComponent, {
      width: '550px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
