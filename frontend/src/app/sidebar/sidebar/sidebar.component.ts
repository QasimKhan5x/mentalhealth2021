import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginComponent } from 'src/app/login/login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  authenticated = window.localStorage['authenticated'];
  constructor() { }

  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
