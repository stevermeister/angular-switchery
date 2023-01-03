import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSwitcheryComponent } from './angular-switchery.component';

describe('AngularSwitcheryComponent', () => {
  let component: AngularSwitcheryComponent;
  let fixture: ComponentFixture<AngularSwitcheryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSwitcheryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSwitcheryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
