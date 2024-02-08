import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleHidePasswordComponent } from './toggle-hide-password.component';

describe('ToggleHidePasswordComponent', () => {
  let component: ToggleHidePasswordComponent;
  let fixture: ComponentFixture<ToggleHidePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleHidePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleHidePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
