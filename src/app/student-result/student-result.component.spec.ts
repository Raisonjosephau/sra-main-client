import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultComponent } from './student-result.componet';

describe('StudentResultComponent', () => {
  let component: StudentResultComponent;
  let fixture: ComponentFixture<StudentResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
