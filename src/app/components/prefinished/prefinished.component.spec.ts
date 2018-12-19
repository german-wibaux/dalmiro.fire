import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefinishedComponent } from './prefinished.component';

describe('PrefinishedComponent', () => {
  let component: PrefinishedComponent;
  let fixture: ComponentFixture<PrefinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
