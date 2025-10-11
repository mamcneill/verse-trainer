import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

export interface Verse {
  id: number;
  reference: string;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class VersesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Verse[]>(`${environment.apiUrl}/my-verses`);
  }

  getOne(id: number) {
    return this.http.get<Verse>(`${environment.apiUrl}/my-verses/${id}`);
  }

  add(verse: Omit<Verse, 'id'>) {
    return this.http.post<Verse>(`${environment.apiUrl}/my-verses`, verse);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/my-verses/${id}`);
  }
}
