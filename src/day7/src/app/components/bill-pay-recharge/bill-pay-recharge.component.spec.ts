import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPayRechargeComponent } from './bill-pay-recharge.component';

describe('BillPayRechargeComponent', () => {
  let component: BillPayRechargeComponent;
  let fixture: ComponentFixture<BillPayRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillPayRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPayRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
