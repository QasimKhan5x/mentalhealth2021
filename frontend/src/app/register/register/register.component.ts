import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private signupService: SignupService, private fb: FormBuilder) { }
  user!: User;
  ngOnInit(): void {
  }
  registerForm = this.fb.group({
    email: [''],
    firstname: [''],
    password: ['']
  })
  register() {
    this.user = this.registerForm.value;
    if (!this.user.age) this.user.age = 18;
    if (!this.user.dateCreation) this.user.dateCreation = Date.now.toString();
    if (!this.user.lastname) this.user.lastname = ' ';


    console.log(this.registerForm.value);
    this.signupService.createUser(this.registerForm.value)
      .subscribe(
        (success) => {
          console.log('signup complete. ', success);
        },
        (error) => {
          console.log('somthing went wrong while signing up;', error);
        }
      )

  }
}
