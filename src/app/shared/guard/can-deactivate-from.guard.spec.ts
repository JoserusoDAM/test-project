import { TestBed } from '@angular/core/testing';

import { CanDeactivateFromGuard } from './can-deactivate-from.guard';

describe('CanDeactivateFromGuard', () => {
  let guard: CanDeactivateFromGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateFromGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
