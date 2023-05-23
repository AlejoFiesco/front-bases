import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshabilitadoComponent } from './deshabilitado.component';

describe('DeshabilitadoComponent', () => {
  let component: DeshabilitadoComponent;
  let fixture: ComponentFixture<DeshabilitadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeshabilitadoComponent]
    });
    fixture = TestBed.createComponent(DeshabilitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
