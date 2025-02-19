import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiModalsComponent } from './ui-modals.component';

describe('UiModalsComponent', () => {
  let component: UiModalsComponent;
  let fixture: ComponentFixture<UiModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
