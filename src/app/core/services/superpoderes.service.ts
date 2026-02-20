import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superpoderes } from '../../data/models/superpoderes.model';

@Injectable({
  providedIn: 'root'
})
export class SuperpoderesService {

  private readonly API_URL = 'https://localhost:44388/api/superpoder'

  constructor(
    private readonly _http: HttpClient
  ) { }

  getSuperpoderes(): Observable<Superpoderes[]> {
    return this._http.get<Superpoderes[]>(this.API_URL);
  }

  getSuperpoderesById(id: number): Observable<Superpoderes> {
    return this._http.get<Superpoderes>(`${this.API_URL}/${id}`);
  }

  salvarSuperpoderes(superpoderes: Superpoderes): Observable<Superpoderes> {
    return this._http.post<Superpoderes>(this.API_URL, superpoderes);
  }

  atualizarSuperpoderes(superpoderes: Superpoderes): Observable<Superpoderes> {
    return this._http.put<Superpoderes>(`${this.API_URL}/${superpoderes.id}`, superpoderes);
  }

  excluirSuperpoderes(id: number): Observable<void> {
    return this._http.delete<void>(`${this.API_URL}/${id}`);
  }
}
