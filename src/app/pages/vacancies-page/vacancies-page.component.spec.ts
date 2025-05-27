import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesPageComponent } from './vacancies-page.component';

describe('VacanciesPageComponent', () => {
  let component: VacanciesPageComponent;
  let fixture: ComponentFixture<VacanciesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacanciesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
