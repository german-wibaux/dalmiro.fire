import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPrincipalComponent } from './category-principal.component';

describe('CategoryPrincipalComponent', () => {
  let component: CategoryPrincipalComponent;
  let fixture: ComponentFixture<CategoryPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
