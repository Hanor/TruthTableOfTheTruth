import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Side.BarComponent } from './side.bar.component';

describe('Side.BarComponent', () => {
  let component: Side.BarComponent;
  let fixture: ComponentFixture<Side.BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side.BarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side.BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
