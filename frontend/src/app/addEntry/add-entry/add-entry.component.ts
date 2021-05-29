import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export default class AddEntryComponent implements OnInit {
  fileToUpload: any;
  mood: any;
  activity: any;


  
  constructor(  ) { }

  ngOnInit(): void {
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  onMoodClick(event: any) {
    this.mood = event.target.classList[0];

   }
  
   onActClick(event: any) {
     this.activity = event.target.classList[0];
     $('.checkbox-booking').prop('checked', false);
     $('.'+this.activity).prop('checked', true);
    
   }
  
    

  
  }

