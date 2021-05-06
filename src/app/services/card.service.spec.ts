import { TestBed } from '@angular/core/testing';
import { CardService } from './card.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('CardService', () => {
  let service: CardService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CardService
      ]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
