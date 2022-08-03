import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaRecepcionComponent } from './salida-recepcion.component';

describe('SalidaRecepcionComponent', () => {
  let component: SalidaRecepcionComponent;
  let fixture: ComponentFixture<SalidaRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaRecepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalidaRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
