import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { CatBreed } from "../interfaces/catBreed";

export interface CatImage {
  id: string; url: string; width: number; height: number; breeds: CatBreed[];
}

@Injectable({ providedIn: 'root' })
export class CatApiService {
  private http = inject(HttpClient);
  private base = environment.catApiBase;
  private headers = new HttpHeaders({ 'x-api-key': environment.catApiKey });

  /**
   * Loads a list of cat breeds for the preview list.
   *
   * @param {number} [limit=100] Maximum number of breeds to return.
   * @returns {Observable<CatBreed[]>} Observable emitting an array of CatBreed objects.
   */
  getCatsPreview(limit = 100): Observable<CatBreed[]> {
    const params = new HttpParams().set('limit', limit);
    return this.http.get<CatBreed[]>(`${this.base}/breeds`, { headers: this.headers, params })
      .pipe(catchError(this.err));
  }

  /**
   * Loads detailed information for a specific cat breed.
   * Sends a request to the Cat API using the breed ID.
   *
   * @param {string} id - The unique breed identifier used by the Cat API.
   * @returns {Observable<CatBreed>} Observable emitting a single CatBreed object.
   */
  getCatDetail(id: string): Observable<CatBreed> {
    const params = new HttpParams().set('limit', 1);
    return this.http.get<CatBreed>(`${this.base}/breeds/${id}`, { headers: this.headers, params })
      .pipe(catchError(this.err));
  }

  /**
   * Fetches images associated with a specific breed.
   *
   * @param {string} breed - Breed ID used to filter the images.
   * @param {number} [limit=1] - Number of images to return.
   * @returns {Observable<CatImage[]>} Observable emitting an array of CatImage objects.
   */
  getCatImagesById(breed: string, limit = 1): Observable<CatImage[]> {
    const params = new HttpParams().set('limit', 1);
    return this.http.get<CatImage[]>(`${this.base}/images/search?limit=${limit}&breed_ids=${breed}`, { headers: this.headers, params })
      .pipe(catchError(this.err));
  }

  /**
   * Generic error handler for Cat API requests.
   * Converts the received error into a readable Error object.
   *
   * @param {*} e - The incoming error object.
   * @returns {Observable<never>} Emits an error observable.
   */
  private err = (e: any) => throwError(() => new Error(e?.message ?? 'CatAPI error'));
}
