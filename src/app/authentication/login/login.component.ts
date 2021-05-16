import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect().subscribe(x => {
      console.log(x);
    });
  }
}