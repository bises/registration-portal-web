import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../../interfaces/Person';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.css']
})
export class PersonModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PersonModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Person) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(event: Person): void {
    if (event.disability === null) {
      event.disability = false;
    }
    this.dialogRef.close(event);
  }

}
