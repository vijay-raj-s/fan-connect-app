import { TestBed } from '@angular/core/testing';

import { NeedAuthGuard } from './login-auth.guard';

describe('LoginAuthGuard', () => {
  let guard: NeedAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NeedAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
