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
  Authenticated: string | any;
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
        (myuser) => {
          let user = myuser[0];
          console.log('success returned.', user);
          bcrypt.compare(this.myForm.get('password')?.value, user.password, (err: any, result: any) => {
            console.log('pass word compare:', result, err);
            if (result) {
              this.Authenticated = true;
              console.log('password correct. authenticated shouwld be true');
              sessionStorage.setItem('authenticated', 'true');
              sessionStorage.setItem('userid', user._id);
              sessionStorage.setItem('profilePic', user.profilePicURL);


              this.router.navigate(['/my_profile']).then(() => {
                window.location.reload();
              });
            }
            else {
              console.log('something went wrong.. check your password..');
            }

          }
          )
        },
        (error) => {
          console.log('cant get user data from server', error);
        }
      );//subscribe ends
  }//login user ends
}//class ends