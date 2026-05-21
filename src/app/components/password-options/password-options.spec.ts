import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordOptions } from './password-options';

describe('PasswordOptions', () => {
  let component: PasswordOptions;
  let fixture: ComponentFixture<PasswordOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordOptions],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
