import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformsdemoComponent } from './templateformsdemo.component';

describe('TemplateformsdemoComponent', () => {
  let component: TemplateformsdemoComponent;
  let fixture: ComponentFixture<TemplateformsdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformsdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
