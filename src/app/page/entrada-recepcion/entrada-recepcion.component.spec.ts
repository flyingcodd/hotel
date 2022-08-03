import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaRecepcionComponent } from './entrada-recepcion.component';

describe('EntradaRecepcionComponent', () => {
  let component: EntradaRecepcionComponent;
  let fixture: ComponentFixture<EntradaRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaRecepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
