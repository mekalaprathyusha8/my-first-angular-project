import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Result2 } from './result2';

describe('Result2', () => {
  let component: Result2;
  let fixture: ComponentFixture<Result2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Result2],
    }).compileComponents();

    fixture = TestBed.createComponent(Result2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
