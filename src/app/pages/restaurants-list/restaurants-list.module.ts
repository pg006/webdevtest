import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RestaurantsListRoutingModule } from './restaurants-list-routing.module';
import { RestaurantsListComponent } from './restaurants-list.component';

@NgModule({
  declarations: [RestaurantsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    FormsModule,
    RestaurantsListRoutingModule,
  ],
  providers: [RestaurantService],
})
export class RestaurantsListModule {}
