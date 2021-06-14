import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  path?: File;

  constructor(private fireStorage: AngularFireStorage) { }

  ngOnInit() { }

  upload($event: any): void {
    this.path = $event.target.files[0];
  }

  uploadImage(): void {
    console.log(this.path?.name);
    this.fireStorage.upload(
      '/profilepics/' + Math.random() + this.path?.name, this.path
    );
  }
}
