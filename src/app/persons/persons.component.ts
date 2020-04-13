import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyErrorStateMatcher } from '../utilities/MyErrorStateMatcher';
import { FormControl, Validators } from '@angular/forms';
import { Person } from '../interfaces/Person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  public matcher = new MyErrorStateMatcher();

  public genders = ['k"?if', 'dlxnf'];

  public casts = ['blnt', 'hghftL', 'db];L', 'cGo'];

  @Input() public owner: Person

  @Output() personEmitter: EventEmitter<Person> = new EventEmitter<Person>();

  public personNameControl = new FormControl('', [ 
    Validators.required
  ]);

  constructor() { }

  ngOnInit() {
    if (!this.owner) {
      this.owner = {
        name: '',
        cast: '',
        gender: '',
        disability: false,
        citizenship: '',
        address: '',
        contactNumber: ''
      }
    }
  }

  onNoClick() {
    this.personEmitter.emit(null);
  }

  submit() {
    this.personEmitter.emit(this.owner);
  }

}
