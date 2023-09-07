import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBMComponent } from './ibm.component';

describe('IBMComponent', () => {
  let component: IBMComponent;
  let fixture: ComponentFixture<IBMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IBMComponent]
    });
    fixture = TestBed.createComponent(IBMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
