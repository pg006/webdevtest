import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
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
    this.router.navigateByUrl('restaurant-detail/' + this.item.restaurantName);
  }
  getStatus(openingTime: string) {
    let date = moment();
    let day = moment().day();
    let weekArray = openingTime.split(',');
    if (day > 4 || day == 0) {
      let timeArray = weekArray[1].split(': ');
      let timeDiff = timeArray[1].split(' - ');
      if (day === 0 && timeArray[0].includes('Sun')) {
        let time1 = moment(timeDiff[0], 'hh:mm A');
        let time2 = moment(timeDiff[1], 'hh:mm A');
        let isBetween = date.isBetween(time1, time2);
        return isBetween;
      } else {
        let time1 = moment(timeDiff[0], 'hh:mm A');
        let time2 = moment(timeDiff[1], 'hh:mm A');
        let isBetween = date.isBetween(time1, time2);
        return isBetween;
      }
    } else {
      let timeArray = weekArray[0].split(': ');
      let timeDiff = timeArray[1].split(' - ');
      let time1 = moment(timeDiff[0], 'hh:mm A');
      let time2 = moment(timeDiff[1], 'hh:mm A');
      let isBetween = date.isBetween(time1, time2);
      return isBetween;
    }
  }
}
