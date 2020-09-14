import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-sidebar',
  templateUrl: './d-sidebar.component.html',
  styleUrls: ['./d-sidebar.component.css']
})
export class DSidebarComponent implements OnInit {

  constructor() { }
    // TODO: Cross browsing
    gotoTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

  ngOnInit() {
  }
  logOut(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.gotoTop();
  }
}
