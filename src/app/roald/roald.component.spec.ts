import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoaldComponent } from './roald.component';

describe('RoaldComponent', () => {
  let component: RoaldComponent;
  let fixture: ComponentFixture<RoaldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoaldComponent]
    });
    fixture = TestBed.createComponent(RoaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
