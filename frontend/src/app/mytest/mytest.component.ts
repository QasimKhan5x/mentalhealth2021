import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { LoginService } from '../services/login.service';
import { SignupService } from '../services/signup.service';
import { Entry } from '../_models/entry';
import { NewUser } from '../_models/newUser';
import { User } from '../_models/user';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {
  user!: User;
  constructor(
    private loginService: LoginService,
    private signupService: SignupService,
    private entryService: EntryService,
  ) { }

  ngOnInit(): void {

    this.createUser();
    this.loginUser();
    this.createEntry();
  }
  loginUser() {
    this.loginService.getUser('1', '1234')
      .subscribe(
        (user) => {
          this.user = user;
          console.log('success', user);
        },
        (error) => {
          console.log('error occured', error);
        }
      )
  }
  createUser() {
    let newUser: NewUser =
    {
      firstname: "zz",
      lastname: 'mm',
      id: '1',
      password: '1122',
      age: 18,
      entries: []
    };
    this.signupService.createUser(newUser)
      .subscribe(
        (user) => {
          console.log('newuser created: ', user);
        },
        (error) => {
          console.log('newuser not created:', error);

        }
      )
  }

  createEntry() {
    if (!this.user) {
      console.log('no user found');
      return;
    }
    let newEntry: Entry = {
      "image": 'google.com/images/1234',
      "activities": ["food", "family"],
      "mood": "happy",
      "text": "Loving the wather",
      "time": Date.toString()
    };
    this.entryService.addEntry(this.user.id, newEntry)
      .subscribe(
        (user) => {
          console.log('ew entry created: ', user);
        },
        (error) => {
          console.log('new entry not created:', error);

        }
      )
  }

}
