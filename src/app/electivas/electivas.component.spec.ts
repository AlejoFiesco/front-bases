import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectivasComponent } from './electivas.component';

describe('ElectivasComponent', () => {
  let component: ElectivasComponent;
  let fixture: ComponentFixture<ElectivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectivasComponent]
    });
    fixture = TestBed.createComponent(ElectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
