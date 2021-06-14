import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private signupService: SignupService) { }
  registerForm = this.fb.group({
    email: [''],
    password: [''],
    name: ['']
  })
  ngOnInit(): void {
  }
  register() {
    let newUser = {

      email: this.registerForm.get('email')?.value,
      firstname: this.registerForm.get('name')?.value,
      password: this.registerForm.get('password')?.value,
      profilePicURL: ''
    }
    console.log('sending new user to server... ', newUser);

    this.signupService.createUser(newUser)
      .subscribe(
        (user) => {
          console.log('user created successfully. server returned: ', user);
        },
        (error) => { console.log('user creation failed. server returned: ', error); }
      )
  }
}
