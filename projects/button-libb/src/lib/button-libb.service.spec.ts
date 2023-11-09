import { TestBed } from '@angular/core/testing';

import { ButtonLibbService } from './button-libb.service';

describe('ButtonLibbService', () => {
  let service: ButtonLibbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonLibbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
