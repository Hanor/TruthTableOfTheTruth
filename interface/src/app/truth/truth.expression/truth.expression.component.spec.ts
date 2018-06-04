import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruthExpressionComponent } from './truth.expression.component';

describe('Truth.ExpressionComponent', () => {
  let component: TruthExpressionComponent;
  let fixture: ComponentFixture<TruthExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruthExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruthExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
