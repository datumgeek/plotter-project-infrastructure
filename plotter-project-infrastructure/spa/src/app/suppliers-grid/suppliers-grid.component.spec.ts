import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersGridComponent } from './suppliers-grid.component';

describe('SuppliersGridComponent', () => {
  let component: SuppliersGridComponent;
  let fixture: ComponentFixture<SuppliersGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
