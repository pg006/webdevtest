import { Component, OnInit } from '@angular/core';
import { category, restaurantItem } from 'src/app/restaurant.interface';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements OnInit {
  allRestaurant: restaurantItem[] = [];
  allCategory: category[] = [
    { name: 'Baked', image: '/assets/category/ob.png' },
    { name: 'Sweet', image: '/assets/category/bg.png' },
    { name: 'Hot Dish', image: '/assets/category/ph.png' },
    { name: 'Fast Foods', image: '/assets/category/md.png' },
    { name: 'Salads', image: '/assets/category/md.png' },
  ];

  constructor(public restaurants: RestaurantService) {
    this.getRestaurant();
  }

  ngOnInit(): void {}

  getRestaurant() {
    this.restaurants.getRestaurantDetails().subscribe((res: any) => {
      this.allRestaurant = res.restaurantDetails;
    });
  }
}
