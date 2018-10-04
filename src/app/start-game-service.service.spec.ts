import { TestBed } from '@angular/core/testing';

import { StartGameServiceService } from './start-game-service.service';

describe('StartGameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartGameServiceService = TestBed.get(StartGameServiceService);
    expect(service).toBeTruthy();
  });
});
