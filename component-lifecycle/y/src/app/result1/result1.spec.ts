import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Result1 } from './result1';

describe('Result1', () => {
  let component: Result1;
  let fixture: ComponentFixture<Result1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Result1],
    }).compileComponents();

    fixture = TestBed.createComponent(Result1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
