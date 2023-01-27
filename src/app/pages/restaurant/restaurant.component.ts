import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  menuItem,
  restaurantItem,
  menus,
  restaurants,
  category,
} from '../../restaurant.interface';
import { RestaurantService } from '../../service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  // display
  restaurantData: any;
  allCategory: category[] = [
    { name: 'All', image: '/assets/category/ob.png' },
    { name: 'Baked', image: '/assets/category/ob.png' },
    { name: 'Sweet', image: '/assets/category/bg.png' },
    { name: 'Hot Dish', image: '/assets/category/ph.png' },
    { name: 'Fast Foods', image: '/assets/category/md.png' },
    { name: 'Salads', image: '/assets/category/md.png' },
  ];
  activeCategory: number = 0;

  allRestaurant: restaurantItem[] = [];
  allMenu: menuItem[] = [];
  menuByRestaurant: any = [];
  menuByCategory: any = [];
  restaurantName: string = '';
  constructor(
    public restaurants: RestaurantService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.restaurantName = params['name'];
      this.getMenu();
      this.getMenuByRestaturant();
      this.filterCategory(this.allCategory[this.activeCategory].name);
    });
  }

  ngOnInit(): void {}

  changeCategory(category: category, i: number) {
    this.activeCategory = i;
    this.filterCategory(category.name);
  }

  filterCategory(name: String) {
    this.menuByCategory = [];
    if (name != 'All') {
      this.menuByRestaurant.forEach((element: menuItem) => {
        const item = element.itemCategory.includes(name.toString());
        if (item) {
          this.menuByCategory.push(element);
        }
      });
    } else {
      this.menuByCategory = this.menuByRestaurant;
    }
  }

  getMenuCount(category: category) {
    let tempMenu: any = [];
    this.menuByRestaurant.forEach((element: menuItem) => {
      const item = element.itemCategory.includes(category.name.toString());
      if (item) {
        tempMenu.push(element);
      }
    });
    return tempMenu.length;
  }

  getMenu() {
    this.restaurants.getMenu().subscribe((res: any) => {
      this.allMenu = res.menu;
      this.getRestaurant();
    });
  }

  getRestaurant() {
    this.restaurants.getRestaurantDetails().subscribe((res: any) => {
      this.allRestaurant = res.restaurantDetails;
      this.getMenuByRestaturant();
    });
  }

  getMenuByRestaturant() {
    this.restaurantData = this.allRestaurant.find(
      (item: restaurantItem) => item?.restaurantName === this.restaurantName
    );

    this.allMenu.forEach((element: menuItem) => {
      const item = element.restaurantName.includes(
        this.restaurantData?.restaurantName
      );
      if (item) {
        this.menuByRestaurant.push(element);
      }
    });
  }
}
