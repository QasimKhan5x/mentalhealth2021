import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
let activity = <Array<string>>new Array();

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})

export default class AddEntryComponent implements OnInit {
  fileToUpload: any;
  mood: any;
  currentActivity: any = "";



  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
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
    this.currentActivity = activity.toString();
  }

}
