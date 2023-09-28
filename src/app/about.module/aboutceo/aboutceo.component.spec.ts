import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutceoComponent } from './aboutceo.component';

describe('AboutceoComponent', () => {
  let component: AboutceoComponent;
  let fixture: ComponentFixture<AboutceoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutceoComponent]
    });
    fixture = TestBed.createComponent(AboutceoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
