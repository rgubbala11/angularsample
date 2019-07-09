import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurepipedemoComponent } from './impurepipedemo.component';

describe('ImpurepipedemoComponent', () => {
  let component: ImpurepipedemoComponent;
  let fixture: ComponentFixture<ImpurepipedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpurepipedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpurepipedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
