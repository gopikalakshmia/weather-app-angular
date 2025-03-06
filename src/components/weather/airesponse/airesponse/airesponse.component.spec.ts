import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiresponseComponent } from './airesponse.component';

describe('AiresponseComponent', () => {
  let component: AiresponseComponent;
  let fixture: ComponentFixture<AiresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiresponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
