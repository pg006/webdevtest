import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  routeUrl: any;
  cuisines: any = [
    'All',
    'Fast Food',
    'American Food',
    'Pizza',
    'Asian',
    'Dessert',
    'Mexican',
    'Breakfast',
  ];
  constructor(private observer: BreakpointObserver, public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routeUrl = event['url'];
      }
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res: any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
