import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = window.localStorage["authenticated"];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    window.localStorage.removeItem('authenticated');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

}
