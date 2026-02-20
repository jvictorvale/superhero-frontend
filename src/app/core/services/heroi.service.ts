import { Heroi } from './../../data/models/heroi.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  private readonly API_URL = 'https://localhost:44388/api/heroi'

  constructor(
    private readonly _http: HttpClient
  ) { }

  getHerois(): Observable<Heroi[]> {
    return this._http.get<Heroi[]>(this.API_URL);
  }

  getHeroiById(id: number): Observable<Heroi> {
    return this._http.get<Heroi>(`${this.API_URL}/${id}`);
  }

  salvarHeroi(heroi: Heroi): Observable<Heroi> {
    return this._http.post<Heroi>(this.API_URL, heroi);
  }

  atualizarHeroi(heroi: Heroi): Observable<Heroi> {
    return this._http.put<Heroi>(`${this.API_URL}/${heroi.id}`, heroi);
  }

  excluirHeroi(id: number): Observable<any> {
    return this._http.delete(`${this.API_URL}/${id}`);
  }
}
