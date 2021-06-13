import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private loginService: LoginService) { }
  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });
  login() {
    console.log(this.loginForm.value);

    this.loginService.getUser(this.loginForm.value.email)
      .subscribe(
        (user) => { console.log(user); },
        (error) => { console.log(error); }
      )
  }
}
