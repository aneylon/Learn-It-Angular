// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';
// import { CardService } from 'src/app/services/card.service';
// import { FlashCardComponent } from './flash-card.component';

// describe('FlashCardComponent', () => {
//   let component: FlashCardComponent;
//   let fixture: ComponentFixture<FlashCardComponent>;
//   let mockCardService
//   // let service = new CardService()
//   let cards = [{}]

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       providers:[CardService]
//       // declarations: [ FlashCardComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     // fixture = TestBed.createComponent(FlashCardComponent);
//     // component = fixture.componentInstance;
//     // fixture.detectChanges();
//     // mockCardService = jasmine.createSpyObj(['selectDeck', 'getDeck', 'selectedDeck'])
//     spyOnProperty(mockCardService, 'selectedDeck').and.returnValue(of(cards))
//     // mockCardService.selectedDeck.and.returnValue(of({}))
//     component = new FlashCardComponent(mockCardService)
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
