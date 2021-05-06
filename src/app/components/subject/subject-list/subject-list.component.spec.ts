import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectListComponent } from './subject-list.component';

describe('SubjectListComponent', () => {
  let component: SubjectListComponent;
  let fixture: ComponentFixture<SubjectListComponent>;
  let mockSubjectService

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ SubjectListComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    // fixture = TestBed.createComponent(SubjectListComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();

    mockSubjectService = jasmine.createSpyObj(['getSubjects'])
    component = new SubjectListComponent(mockSubjectService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
