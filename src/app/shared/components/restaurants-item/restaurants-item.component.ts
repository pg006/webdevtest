import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-item',
  templateUrl: './restaurants-item.component.html',
  styleUrls: ['./restaurants-item.component.scss'],
})
export class RestaurantsItemComponent implements OnInit {
  @Input('rItem') item: any;
  constructor(public router: Router) {}

  ngOnInit(): void {}
  openDetail() {
    this.router.navigateByUrl('restaurant/' + this.item.restaurantName);
  }
}
