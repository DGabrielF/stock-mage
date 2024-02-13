import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfoCardComponent } from './app-info-card.component';

describe('AppInfoCardComponent', () => {
  let component: AppInfoCardComponent;
  let fixture: ComponentFixture<AppInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInfoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
