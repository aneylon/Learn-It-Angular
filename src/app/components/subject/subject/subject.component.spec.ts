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

  it('should have the correct subject', () => {
    expect(fixture.componentInstance.subject.id).toEqual(1)
    expect(fixture.componentInstance.subject.subTitle).toEqual('things')
    expect(fixture.componentInstance.subject.title).toEqual('stuff')
  })
});
