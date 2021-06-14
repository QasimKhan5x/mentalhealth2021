import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import * as bcrypt from 'bcryptjs';
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
      email: ['', [Validators.required, Validators.pattern('^[0-9]*')]],
      password: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {


  }

  loginUser() {
    console.log('trying to login with ', this.myForm.value);

    this.loginService.getUser(this.myForm.get("email")?.value)
      .subscribe(
        (user) => {
          console.log('success returned.', user);
          let myuser = user.filter(u => u.email == this.myForm.get("email")?.value)[0];
          console.log('from server"s return myuser extracted.', myuser);

          let x = 0;
          bcrypt.compare(this.myForm.get('password')?.value, myuser.password, (err: any, result: any) => {
            console.log('pass word compare:', result, err);
            if (result) {
              this.Authenticated = true;
              console.log('password correct. authenticated shouwld be true');

              window.localStorage['authenticated'] = true;
              console.log(window.localStorage['authenticated']);

              this.router.navigate(['/my_profile']).then(() => {
                //window.location.reload();
              });
            }
            else {
              console.log('something went wrong.. check your password..');

            }
          });
          console.log(x);

          if (myuser.password == this.myForm.get("password")?.value) {

          }
        },
        (error) => {
          console.log("Error returned ", error);
          this.Invalid = true;
        }
      )
  }



}
