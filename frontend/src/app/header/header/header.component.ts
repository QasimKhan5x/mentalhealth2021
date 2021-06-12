import { Component, OnInit, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = window.localStorage["authenticated"];
  constructor(private router: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void {
  }

  logout() {
    window.localStorage.removeItem('authenticated');
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

}
