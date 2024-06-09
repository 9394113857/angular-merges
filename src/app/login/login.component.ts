// login.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, public router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    uname: new FormControl(),
    pwd: new FormControl()
  });

  CheckUser() {
    const username = this.loginForm.value["uname"];
    const password = this.loginForm.value["pwd"];
    this.loginService.login(username, password).subscribe(
      (response) => {
        this.loginService.setSession(response);
        this.router.navigate(['home']);
      },
      (error) => {
        alert("Invalid User..");
      }
    );
  }
}
