import { TestBed } from '@angular/core/testing';

import { NestedFormService } from './nested-form.service';

describe('NestedFormService', () => {
  let service: NestedFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NestedFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
