import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import {CatBreed} from "../interfaces/catBreed";

export interface CatImage {
  id: string; url: string; width: number; height: number; breeds: CatBreed[];
}

@Injectable({ providedIn: 'root' })
export class CatApiService {
  private http = inject(HttpClient);
  private base = environment.catApiBase;
  private headers = new HttpHeaders({ 'x-api-key': environment.catApiKey });

  getCatsPreview(limit = 100): Observable<CatBreed[]> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<CatBreed[]>(`${this.base}/breeds`, { headers: this.headers, params })
      .pipe(catchError(this.err));
  }

  getCatDetail(id: string): Observable<CatBreed> {
    const params = new HttpParams().set('limit', 1);
    return this.http.get<CatBreed>(`${this.base}/breeds/${id}`, { headers: this.headers, params })
      .pipe(catchError(this.err));
  }

  getCatImagesById(breed: string, limit = 1): Observable<CatImage[]> {
    const params = new HttpParams().set('limit', 1);
    return this.http.get<CatImage[]>(`${this.base}/images/search?limit=${limit}&breed_ids=${breed}`, { headers: this.headers, params })
      .pipe(catchError(this.err));
  }

  private err = (e: any) => throwError(() => new Error(e?.message ?? 'CatAPI error'));
}
