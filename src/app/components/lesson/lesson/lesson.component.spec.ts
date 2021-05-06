import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonComponent } from './lesson.component';

describe('LessonComponent', () => {
  let component: LessonComponent;
  let fixture: ComponentFixture<LessonComponent>;
  let mockCardService

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ LessonComponent ]
    // })
    // .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(LessonComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    mockCardService = jasmine.createSpyObj(['selectDeck', 'getDeck'])
    component = new LessonComponent(mockCardService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
