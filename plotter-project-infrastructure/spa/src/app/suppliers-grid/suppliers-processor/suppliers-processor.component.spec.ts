import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersProcessorComponent } from './suppliers-processor.component';

describe('SuppliersProcessorComponent', () => {
  let component: SuppliersProcessorComponent;
  let fixture: ComponentFixture<SuppliersProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
