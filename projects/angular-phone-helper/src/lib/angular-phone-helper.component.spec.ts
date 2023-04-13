import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPhoneHelperComponent } from './angular-phone-helper.component';

describe('AngularPhoneHelperComponent', () => {
  let component: AngularPhoneHelperComponent;
  let fixture: ComponentFixture<AngularPhoneHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPhoneHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPhoneHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
