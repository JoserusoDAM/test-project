import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentServiceFormComponent } from './parent-service-form.component';

describe('ParentServiceFormComponent', () => {
  let component: ParentServiceFormComponent;
  let fixture: ComponentFixture<ParentServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentServiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
