import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculeSelectionneComponent } from './matricule-selectionne.component';

describe('MatriculeSelectionneComponent', () => {
  let component: MatriculeSelectionneComponent;
  let fixture: ComponentFixture<MatriculeSelectionneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculeSelectionneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculeSelectionneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
