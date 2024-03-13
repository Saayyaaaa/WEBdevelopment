import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';

import { myAlbum } from 'src/models/albums';
import { myPhotos } from 'src/models/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<myAlbum[]> {
    return this.http.get<myAlbum[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<myAlbum> {
    return this.http.get<myAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  addAlbum(body: any): Observable<myAlbum> {
    return this.http.post<myAlbum>(`https://jsonplaceholder.typicode.com/albums`, body);
  }

  deleteAlbum(id: number): Observable<myAlbum> {
    return this.http.delete<myAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle })
      .pipe(catchError((error) => throwError(error)));
  }

  getPhotos(id: number): Observable<myPhotos[]> {
    return this.http.get<myPhotos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
