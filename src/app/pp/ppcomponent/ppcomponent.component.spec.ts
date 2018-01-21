import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcomponentComponent } from './ppcomponent.component';

describe('PpcomponentComponent', () => {
  let component: PpcomponentComponent;
  let fixture: ComponentFixture<PpcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
