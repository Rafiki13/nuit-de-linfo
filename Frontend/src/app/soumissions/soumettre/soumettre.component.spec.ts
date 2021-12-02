import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoumettreComponent } from './soumettre.component';

describe('SoumettreComponent', () => {
  let component: SoumettreComponent;
  let fixture: ComponentFixture<SoumettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoumettreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoumettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
