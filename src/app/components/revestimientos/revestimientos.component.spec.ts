import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevestimientosComponent } from './revestimientos.component';

describe('RevestimientosComponent', () => {
  let component: RevestimientosComponent;
  let fixture: ComponentFixture<RevestimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevestimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevestimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
