import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryService } from '../services/entry.service';
import { UserService } from '../services/user.service';
import { Entry } from '../_models/entry';
import { User } from '../_models/user';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  path?: File;
  userid!: string | any;
  profilePic!: string | any;
  user!: User;
  entries!: Entry[];
  dateCreation!: string;
  images!: string[];
  moods!: string[];
  activities!: string[][];
  allactivities!: string[];
  allactivitiescount: any = {};
  constructor(private router: Router, private userService: UserService, private entryService: EntryService) {
    this.userid = sessionStorage.getItem('userid');
    if (!this.userid) { this.router.navigate(['/login']) }
    else {
      this.profilePic = sessionStorage.getItem('profilePic');
    }
  }

  ngOnInit(): void {
    this.userService.getUser(this.userid)
      .subscribe(
        (user) => {
          this.user = user;
          this.dateCreation = user.dateCreation;
        },
        (error) => console.log('error occured while fetching user', error)
      )
    this.entryService.getEntries(this.userid)
      .subscribe(
        (entries) => {
          this.entries = entries;
          this.images = entries.map(entry => entry.imageURL);
          this.moods = entries.map(entry => entry.mood);
          this.activities = entries.map(entry => entry.activities);
          console.log('all images by this user: ', this.images);
          console.log('all moods by this user: ', this.moods);
          console.log('all activities by this user: ', this.activities);
          this.allactivities = [];
          this.activities.forEach(activity => {
            activity.forEach(act => {
              this.allactivities.push(act);
            })
          })
          console.log('all activities by this user: ', this.allactivities);

          this.allactivities.forEach(act => {
            if (this.allactivitiescount[act]) {
              this.allactivitiescount[act]++;
            }
            else {
              this.allactivitiescount[act] = 1;
            }
          });
          console.log('all activities count  by this user: ', this.allactivitiescount);

        },
        (error) => console.log('error occured while fetching user', error)
      )
  }

}
