import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { SuperHero } from '../models/super-hero.model';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  private apiUrl = `${environment.apiUrl}/superheroes`;

  constructor(private http: HttpClient) {}

  addHero(hero: SuperHero): Observable<SuperHero> {
    return this.http.post<SuperHero>(this.apiUrl, hero);
  }

  getAllHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(this.apiUrl);
  }

  getHeroById(id: number): Observable<SuperHero> {
    return this.http.get<SuperHero>(`${this.apiUrl}/${id}`);
  }

  searchHeroesByName(name: string): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${this.apiUrl}?name_like=${name}`);
  }

  updateHero(id: number, hero: SuperHero): Observable<SuperHero> {
    return this.http.put<SuperHero>(`${this.apiUrl}/${id}`, hero);
  }

  deleteHero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
