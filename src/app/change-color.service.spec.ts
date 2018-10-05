import { TestBed } from '@angular/core/testing';

import { ChangeColorService } from './change-color.service';

describe('ChangeColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeColorService = TestBed.get(ChangeColorService);
    expect(service).toBeTruthy();
  });
});
