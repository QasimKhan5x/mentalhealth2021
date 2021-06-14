import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { sequenceEqual } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  path?: File;
  userid!: string | any;
  profilePic!: string | any;
  constructor(private fireStorage: AngularFireStorage, private router: Router, private userService: UserService) {
    this.userid = sessionStorage.getItem('userid');
    if (!this.userid) { this.router.navigate(['/login']) }
    else {
      this.profilePic = sessionStorage.getItem('profilePic');
    }
  }

  ngOnInit() { }

  upload($event: any): void {
    this.path = $event.target.files[0];
  }

  //method to upload file at firebase storage
  async uploadImage() {
    if (this.path) {
      const filePath = '/profilepics/' + this.userid + '/img-' + this.path?.name;    //path at which image will be stored in the firebase storage
      const snap = await this.fireStorage.upload(filePath, this.path);    //upload task
      this.getUrl(snap);
    } else { alert('Please select an image'); }
  }

  //method to retrieve download url

  private async getUrl(snap: firebase.default.storage.UploadTaskSnapshot) {

    const url = await snap.ref.getDownloadURL();
    let srcurl = url;  //store the URL
    console.log(srcurl);
    this.userService.updateUser({ id: this.userid, profilePicURL: srcurl })
      .subscribe(
        (success) => {
          console.log('image uploaded and db updated. new data ', success);
        },
        (error) => {
          console.log('db update failed after image sending... ', error);
        }
      )
  }

  // uploadImage(): void {
  //   let uploadPath = '/profilepics/' + this.userid + '/img-' + this.path?.name;
  //   console.log(this.path?.name);
  //   this.fireStorage.upload(uploadPath, this.path);
  //   this.userService.updateUser({ id: this.userid, profilePicURL: uploadPath })
  //     .subscribe(
  //       (success) => {
  //         console.log('image uploaded and db updated. new data ', success);
  //       },
  //       (error) => {
  //         console.log('db update failed after image sending... ', error);
  //       }
  //     )
  // }
}