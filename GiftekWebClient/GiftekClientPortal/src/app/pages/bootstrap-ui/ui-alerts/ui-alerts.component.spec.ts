import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAlertsComponent } from './ui-alerts.component';

describe('UiAlertsComponent', () => {
  let component: UiAlertsComponent;
  let fixture: ComponentFixture<UiAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
