import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundsearchComponent } from './soundsearch.component';

describe('SoundsearchComponent', () => {
  let component: SoundsearchComponent;
  let fixture: ComponentFixture<SoundsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
