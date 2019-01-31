import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Structure } from 'src/app/shared/services/structure.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:3000/structures/';

  constructor(private http: HttpClient) { }

  getStructures() {
    return this.http.get<Structure[]>(`${this.apiURL}/getStructures`);
  }

  addStructure(reqData) {
    return this.http.post(`${this.apiURL}/addStructure`, reqData, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}
