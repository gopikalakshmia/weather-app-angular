import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayweatherComponent } from './displayweather.component';

describe('DisplayweatherComponent', () => {
  let component: DisplayweatherComponent;
  let fixture: ComponentFixture<DisplayweatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayweatherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
