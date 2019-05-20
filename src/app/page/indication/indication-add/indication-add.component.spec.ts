import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicationAddComponent } from './indication-add.component';

describe('IndicationAddComponent', () => {
  let component: IndicationAddComponent;
  let fixture: ComponentFixture<IndicationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
