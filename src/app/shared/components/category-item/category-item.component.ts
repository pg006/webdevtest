import { Component, Input, OnInit } from '@angular/core';
import { category } from 'src/app/restaurant.interface';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {
  @Input('cItem') item: category | undefined;

  constructor() {}

  ngOnInit(): void {}
}
