import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurepipedemoComponent } from './purepipedemo.component';

describe('PurepipedemoComponent', () => {
  let component: PurepipedemoComponent;
  let fixture: ComponentFixture<PurepipedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurepipedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurepipedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
