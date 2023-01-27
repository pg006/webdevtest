import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(public common: CommonService, private _http: HttpClient
  ) { }

  getRestaurantDetails() {
    return this.common.get('restaurantDetails')
  }

  getAllRestaurants() {
    return this.common.get('allRestaurants')
  }

  getMenu() {
    return this.common.get('menu')
  }

}
