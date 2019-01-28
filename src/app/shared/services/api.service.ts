import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public server = 'http://localhost:3000/';
  public apiUrl = 'structures/';
  public serverWithApiUrl = this.server + this.apiUrl;
}
