import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinilicoComponent } from './vinilico.component';

describe('VinilicoComponent', () => {
  let component: VinilicoComponent;
  let fixture: ComponentFixture<VinilicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinilicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinilicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
