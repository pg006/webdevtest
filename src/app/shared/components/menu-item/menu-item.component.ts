import { Component, Input, OnInit } from '@angular/core';
import { menuItem } from 'src/app/restaurant.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input('mItem') item: menuItem | undefined;

  constructor() {}

  ngOnInit(): void {}
}
