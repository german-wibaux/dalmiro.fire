import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelaminaComponent } from './melamina.component';

describe('MelaminaComponent', () => {
  let component: MelaminaComponent;
  let fixture: ComponentFixture<MelaminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelaminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelaminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
