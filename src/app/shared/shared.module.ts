import {
  NgModule,
  ModuleWithProviders,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantsItemComponent } from './components/restaurants-item/restaurants-item.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { DrawerComponent } from './components/drawer/drawer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidemenuComponent,
    RestaurantsItemComponent,
    CategoryItemComponent,
    MenuItemComponent,
    DrawerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent,
    SidemenuComponent,
    RestaurantsItemComponent,
    CategoryItemComponent,
    DrawerComponent,
    MenuItemComponent,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
