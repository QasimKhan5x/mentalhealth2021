import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  Invalid = false;
  Authenticated = false;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      password: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
  }
  loginUser() {
    this.loginService.getUser(this.myForm.get("username")?.value)
      .subscribe(
        (user) => {
          if (user.password == this.myForm.get("password")?.value) {
            this.Authenticated = true;
            window.localStorage['authenticated'] = true;
            this.router.navigate(['/my_profile']).then(() => {
              window.location.reload();
            });
          }
        },
        (error) => {
          console.log("Error");
          this.Invalid = true;
        }
      )
  }



}
