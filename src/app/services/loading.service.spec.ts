import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loading.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoadingService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
