import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceduleSectionComponent } from './scedule-section.component';

describe('SceduleSectionComponent', () => {
  let component: SceduleSectionComponent;
  let fixture: ComponentFixture<SceduleSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SceduleSectionComponent]
    });
    fixture = TestBed.createComponent(SceduleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
