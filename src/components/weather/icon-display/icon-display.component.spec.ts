import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDisplayComponent } from './icon-display.component';

describe('IconDisplayComponent', () => {
  let component: IconDisplayComponent;
  let fixture: ComponentFixture<IconDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
