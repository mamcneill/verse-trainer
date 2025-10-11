import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { VersesService } from './verses.service';

describe('VersesService', () => {
  let service: VersesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VersesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all verses', () => {
    const mockVerses = [
      { id: 1, reference: 'John 3:16', text: 'Verse 1' },
      { id: 2, reference: 'Psalm 23:1', text: 'Verse 2' }
    ];

    service.getAll().subscribe(verses => {
      expect(verses).toEqual(mockVerses);
    });

    const req = httpMock.expectOne(req => req.url.endsWith('/my-verses') && req.method === 'GET');
    req.flush(mockVerses);
  });

  it('should fetch a single verse', () => {
    const mockVerse = { id: 1, reference: 'John 3:16', text: 'Verse 1' };

    service.getOne(1).subscribe(verse => {
      expect(verse).toEqual(mockVerse);
    });

    const req = httpMock.expectOne(req => req.url.endsWith('/my-verses/1') && req.method === 'GET');
    req.flush(mockVerse);
  });

  it('should add a verse', () => {
    const newVerse = { reference: 'Matt 5:9', text: 'New Verse' };
    const mockResponse = { id: 3, ...newVerse };

    service.add(newVerse).subscribe(verse => {
      expect(verse).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(req => req.url.endsWith('/my-verses') && req.method === 'POST');
    expect(req.request.body).toEqual(newVerse);
    req.flush(mockResponse);
  });

  it('should delete a verse', () => {
    service.delete(1).subscribe(response => {
      // delete returns no content; ensure the observable completes
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(req => req.url.endsWith('/my-verses/1') && req.method === 'DELETE');
    req.flush(null);
  });
});
