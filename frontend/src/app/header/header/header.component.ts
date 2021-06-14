import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = sessionStorage.getItem('authenticated') == "true" ? true : false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.removeItem('authenticated');
    sessionStorage.removeItem('profilePic');
    sessionStorage.removeItem('userid');
    this.router.navigate(['/home']);
  }

}
