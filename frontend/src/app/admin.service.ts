import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PaginatedResponse {
  current_page: number;
  data: User[];
  total: number;
  per_page: number;
}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) {}

  // Méthode pour obtenir les utilisateurs
  getUsers(page: number = 1): Observable<PaginatedResponse> {
    return this.http.get<PaginatedResponse>(`${this.apiUrl}?page=${page}`);
  }
}
