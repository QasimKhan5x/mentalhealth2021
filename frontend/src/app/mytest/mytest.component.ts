import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { LoginService } from '../services/login.service';
import { SignupService } from '../services/signup.service';
import { UserService } from '../services/user.service';
import { Entry } from '../_models/entry';
import { NewUser } from '../_models/newUser';
import { User } from '../_models/user';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {
  enteries!: Entry[];
  user!: User;
  constructor(
    private loginService: LoginService,
    private signupService: SignupService,
    private entryService: EntryService,
    private userService: UserService
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
      enteries: []
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
  getEntry() {
    if (!this.user) {
      console.log('no user found');
      return;
    }
    this.entryService.getEnteries(this.user.id)
      .subscribe(
        (entries) => {
          this.enteries = entries;
          console.log(entries);
        },
        (error) => {
          console.log('enteries could not be found', error);
        }
      )
  }
  createEntry() {
    if (!this.user) {
      console.log('none logged in');
      return;
    }
    let entry: Entry =
    {
      userid: this.user.id,
      activities: ['food', 'family'],
      image: 'google.com/images/1234',
      mood: 'Meh',
      text: 'weather could be beter',
      time: new Date().toISOString()
    }
    this.entryService.addEntry(this.user.id, entry)
      .subscribe(
        (entry) => {
          console.log(entry);
        },
        (error) => {
          console.log(error);

        }
      )
  }

}
