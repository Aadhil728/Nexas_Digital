import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTableSectionComponent } from './pricing-table-section.component';

describe('PricingTableSectionComponent', () => {
  let component: PricingTableSectionComponent;
  let fixture: ComponentFixture<PricingTableSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingTableSectionComponent]
    });
    fixture = TestBed.createComponent(PricingTableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
