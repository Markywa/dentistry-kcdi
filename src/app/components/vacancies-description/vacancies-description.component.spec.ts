import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesDescriptionComponent } from './vacancies-description.component';

describe('VacanciesDescriptionComponent', () => {
  let component: VacanciesDescriptionComponent;
  let fixture: ComponentFixture<VacanciesDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacanciesDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacanciesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
