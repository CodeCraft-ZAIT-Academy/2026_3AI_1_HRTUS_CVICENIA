import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { of } from 'rxjs';
import { BookApiService } from './book-api.service';

TestBed.configureTestingModule({
  providers: [{ provide: BookApiService, useValue: { getBooks: () => of([]) } }],
});

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
