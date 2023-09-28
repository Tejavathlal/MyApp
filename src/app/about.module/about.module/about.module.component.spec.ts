import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutModuleComponent } from './about.module.component';

describe('AboutModuleComponent', () => {
  let component: AboutModuleComponent;
  let fixture: ComponentFixture<AboutModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutModuleComponent]
    });
    fixture = TestBed.createComponent(AboutModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
