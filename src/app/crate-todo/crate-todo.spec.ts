import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateTodo } from './crate-todo';

describe('CrateTodo', () => {
  let component: CrateTodo;
  let fixture: ComponentFixture<CrateTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrateTodo],
    }).compileComponents();

    fixture = TestBed.createComponent(CrateTodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
