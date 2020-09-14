import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title = 'News & Events';

  constructor(
    public router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
