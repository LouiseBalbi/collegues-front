import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueCreerComponent } from './collegue-creer.component';

describe('CollegueCreerComponent', () => {
  let component: CollegueCreerComponent;
  let fixture: ComponentFixture<CollegueCreerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegueCreerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueCreerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
