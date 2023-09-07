import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateroaldComponent } from './createroald.component';

describe('CreateroaldComponent', () => {
  let component: CreateroaldComponent;
  let fixture: ComponentFixture<CreateroaldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateroaldComponent]
    });
    fixture = TestBed.createComponent(CreateroaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
