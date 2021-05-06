import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectComponent } from './subject.component';

describe('SubjectComponent', () => {
  let component: SubjectComponent;
  let fixture: ComponentFixture<SubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectComponent);
    component = fixture.componentInstance;
    component.subject = { id: 1, title: 'stuff', subTitle: 'things'}
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
