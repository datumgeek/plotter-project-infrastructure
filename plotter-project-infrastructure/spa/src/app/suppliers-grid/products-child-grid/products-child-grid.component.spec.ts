import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsChildGridComponent } from './products-child-grid.component';

describe('ProductsChildGridComponent', () => {
  let component: ProductsChildGridComponent;
  let fixture: ComponentFixture<ProductsChildGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsChildGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsChildGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
