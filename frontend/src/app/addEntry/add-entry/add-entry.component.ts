import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export default class AddEntryComponent implements OnInit {
  fileToUpload: any;
  mood: any;

  
  constructor(  ) { }

  ngOnInit(): void {
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  onClick(event: any) {
    this.mood = event.target.classList[0];

   }
  
  }

