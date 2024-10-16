import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SuperHeroService } from './super-hero.service';
import { SuperHero } from '../models/super-hero.model';

describe('SuperHeroService', () => {
  let service: SuperHeroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SuperHeroService],
    });
    service = TestBed.inject(SuperHeroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all heroes', () => {
    const dummyHeroes: SuperHero[] = [
      { id: 1, name: 'Spiderman', powers: ['Spider Sense'], origin: 'New York' },
      { id: 2, name: 'Superman', powers: ['Super Strength'], origin: 'Krypton' },
    ];

    service.getAllHeroes().subscribe((heroes) => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(dummyHeroes);
    });

    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyHeroes);
  });
});
