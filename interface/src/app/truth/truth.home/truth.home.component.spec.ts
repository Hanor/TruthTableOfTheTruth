import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Truth.HomeComponent } from './truth.home.component';

describe('Truth.HomeComponent', () => {
  let component: Truth.HomeComponent;
  let fixture: ComponentFixture<Truth.HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Truth.HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Truth.HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
