import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZocalosComponent } from './zocalos.component';

describe('ZocalosComponent', () => {
  let component: ZocalosComponent;
  let fixture: ComponentFixture<ZocalosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZocalosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZocalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
