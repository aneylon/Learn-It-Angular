import { TestBed } from '@angular/core/testing';
import { SubjectService } from './subject.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('SubjectService', () => {
  let service: SubjectService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SubjectService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(SubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
