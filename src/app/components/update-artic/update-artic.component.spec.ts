import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticComponent } from './update-artic.component';

describe('UpdateArticComponent', () => {
  let component: UpdateArticComponent;
  let fixture: ComponentFixture<UpdateArticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateArticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateArticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
