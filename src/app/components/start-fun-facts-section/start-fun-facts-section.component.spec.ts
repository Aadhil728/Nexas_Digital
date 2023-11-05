import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFunFactsSectionComponent } from './start-fun-facts-section.component';

describe('StartFunFactsSectionComponent', () => {
  let component: StartFunFactsSectionComponent;
  let fixture: ComponentFixture<StartFunFactsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartFunFactsSectionComponent]
    });
    fixture = TestBed.createComponent(StartFunFactsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
