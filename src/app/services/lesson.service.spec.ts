import { TestBed } from '@angular/core/testing';
import { LessonService } from './lesson.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('LessonService', () => {
  let service: LessonService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LessonService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(LessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
