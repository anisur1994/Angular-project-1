import { Component, OnInit } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-library';

  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta
  ){}

  ngOnInit(){
    this.titleService.setTitle(this.title);
  }
}
