import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav.BarComponent } from './nav.bar.component';

describe('Nav.BarComponent', () => {
  let component: Nav.BarComponent;
  let fixture: ComponentFixture<Nav.BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nav.BarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav.BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
