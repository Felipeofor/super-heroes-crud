import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SuperHeroService } from './super-hero.service';
import { SuperHero } from '../models/super-hero.model';
import { environment } from '../../environment';

describe('SuperHeroService', () => {
  let service: SuperHeroService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.apiUrl}/superheroes`;

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all heroes using GET method', () => {
    const dummyHeroes: SuperHero[] = [
      { id: 1, name: 'Spiderman', powers: ['Agility', 'Spider Sense'], origin: 'New York' },
      { id: 2, name: 'Superman', powers: ['Super Strength', 'Flight'], origin: 'Krypton' }
    ];

    service.getAllHeroes().subscribe(heroes => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it('should add a new hero using POST method', () => {
    const newHero: SuperHero = { id: 3, name: 'Batman', powers: ['Martial Arts', 'Wealth'], origin: 'Gotham' };

    service.addHero(newHero).subscribe(hero => {
      expect(hero).toEqual(newHero);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(newHero);
  });

  it('should get a hero by ID using GET method', () => {
    const hero: SuperHero = { id: 1, name: 'Spiderman', powers: ['Agility', 'Spider Sense'], origin: 'New York' };

    service.getHeroById(1).subscribe(fetchedHero => {
      expect(fetchedHero).toEqual(hero);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(hero);
  });

  it('should search heroes by name using GET method', () => {
    const dummyHeroes: SuperHero[] = [
      { id: 1, name: 'Spiderman', powers: ['Agility', 'Spider Sense'], origin: 'New York' }
    ];

    service.searchHeroesByName('Spiderman').subscribe(heroes => {
      expect(heroes.length).toBe(1);
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpMock.expectOne(`${apiUrl}?name_like=Spiderman`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it('should update a hero using PUT method', () => {
    const updatedHero: SuperHero = { id: 1, name: 'Spiderman', powers: ['Agility', 'Spider Sense', 'Webs'], origin: 'New York' };

    service.updateHero(1, updatedHero).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedHero);
  });

  it('should delete a hero using DELETE method', () => {
    service.deleteHero(1).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
