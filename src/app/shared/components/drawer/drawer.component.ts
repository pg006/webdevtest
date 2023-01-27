import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
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
  @Output() toggleDrawer = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
}
