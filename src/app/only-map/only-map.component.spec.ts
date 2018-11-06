import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyMapComponent } from './only-map.component';

describe('OnlyMapComponent', () => {
  let component: OnlyMapComponent;
  let fixture: ComponentFixture<OnlyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
