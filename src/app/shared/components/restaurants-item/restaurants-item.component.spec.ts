import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsItemComponent } from './restaurants-item.component';

describe('RestaurantsItemComponent', () => {
  let component: RestaurantsItemComponent;
  let fixture: ComponentFixture<RestaurantsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
