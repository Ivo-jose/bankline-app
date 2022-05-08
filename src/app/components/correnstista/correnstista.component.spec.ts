import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrenstistaComponent } from './correnstista.component';

describe('CorrenstistaComponent', () => {
  let component: CorrenstistaComponent;
  let fixture: ComponentFixture<CorrenstistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrenstistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrenstistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
