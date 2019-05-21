import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationEditComponent } from './indication-edit.component';

describe('IndicationEditComponent', () => {
  let component: IndicationEditComponent;
  let fixture: ComponentFixture<IndicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
