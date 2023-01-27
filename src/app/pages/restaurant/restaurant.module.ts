import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    RestaurantRoutingModule,
  ],
  providers: [RestaurantService],
})
export class RestaurantsModule {}
