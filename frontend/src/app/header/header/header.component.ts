import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = false;

  constructor(private router: Router) {
    if (sessionStorage.getItem('userid')) {
      this.authenticated = true;
    }
    console.log(this.authenticated);
  }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('profilePic');
    sessionStorage.removeItem('userid');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

}
