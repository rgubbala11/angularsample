import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformsdemoComponent } from './reactiveformsdemo.component';

describe('ReactiveformsdemoComponent', () => {
  let component: ReactiveformsdemoComponent;
  let fixture: ComponentFixture<ReactiveformsdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveformsdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
