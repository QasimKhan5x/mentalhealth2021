import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import * as $ from 'jquery';
import { LoginComponent } from 'src/app/login/login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  authenticated = window.localStorage['authenticated'];
  constructor(public auth: AuthService,
    @Inject(DOCUMENT) public document: Document) {
    
  }

  
  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}

