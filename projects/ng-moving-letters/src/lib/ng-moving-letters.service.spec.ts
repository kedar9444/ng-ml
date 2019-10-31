import { TestBed } from '@angular/core/testing';

import { NgMovingLettersService } from './ng-moving-letters.service';

describe('NgMovingLettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMovingLettersService = TestBed.get(NgMovingLettersService);
    expect(service).toBeTruthy();
  });
});
