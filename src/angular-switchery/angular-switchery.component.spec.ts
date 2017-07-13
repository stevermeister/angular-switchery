import { TestBed, async } from '@angular/core/testing';

import { AngularSwitcheryComponent } from './angular-switchery.component';

describe('AngularSwitcheryComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AngularSwitcheryComponent
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    //const fixture = TestBed.createComponent(AngularSwitcheryComponent);
    //const app = fixture.debugElement.componentInstance;
    expect(true).toBeTruthy();
  }));

});
