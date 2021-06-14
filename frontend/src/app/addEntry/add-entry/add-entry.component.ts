import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { EntryService } from 'src/app/services/entry.service';
let activity = <Array<string>>new Array();

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})

export default class AddEntryComponent implements OnInit {
  entryText = new FormControl();
  mood: any;
  currentActivity: any = "";

  path?: File;
  userid!: string | any;
  profilePic!: string | any;
  thoughts: string = "";

  constructor(private fireStorage: AngularFireStorage,
    private entryService: EntryService,
    private router: Router,) {
    this.userid = sessionStorage.getItem('userid');
    if (!this.userid) { this.router.navigate(['/login']) }
  }
  ngOnInit(): void {
  }

  upload($event: any): void {
    this.path = $event.target.files[0];
  }
  onMoodClick(event: any) {
    this.mood = event.target.classList[0];
  }

  onActClick(event: any) {
    this.currentActivity = event.target.classList[0];
    if (this.currentActivity == "bi" || this.currentActivity == "text" || this.currentActivity == "for-checkbox-booking") { return; }
    const index = activity.indexOf(this.currentActivity);
    if (index >= 0) {
      activity.splice(index, 1);

    }
    else {
      activity.push(this.currentActivity);
    }
    console.log(activity);
    this.currentActivity = activity;
  }
  saveEntry() {
    let entry = {
      activities: this.currentActivity,
      mood: this.mood,
      userId: this.userid,
      text: this.entryText.value
    }
    console.log('entry created.. now creating image...', entry);

    this.uploadImage(entry);
  }





  //method to upload file at firebase storage
  async uploadImage(entry: any) {
    if (this.path) {
      const filePath = '/entries/' + this.userid + '/img-' + this.path?.name;    //path at which image will be stored in the firebase storage
      const snap = await this.fireStorage.upload(filePath, this.path);    //upload task
      this.getUrl(snap, entry);
    } else { alert('Please select an image'); }
  }

  //method to retrieve download url

  private async getUrl(snap: firebase.default.storage.UploadTaskSnapshot, entry: any) {

    const url = await snap.ref.getDownloadURL();
    let srcurl = url;  //store the URL

    entry['imageURL'] = srcurl;
    console.log('entry sending fro upload with data:  ', entry);
    this.entryService.addEntry(entry)
      .subscribe(
        (success) => {
          console.log('entry uploaded and db updated. new data ', success);
        },
        (error) => {
          console.log('db update failed after entry posting... ', error);
        }
      )
  }

}
