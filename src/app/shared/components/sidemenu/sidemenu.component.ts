import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  routeUrl: any;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  @Output() toggleDrawer = new EventEmitter<any>();

  constructor(public router: Router, private observer: BreakpointObserver) {
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
