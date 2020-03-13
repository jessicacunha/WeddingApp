import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpServiceProvider {
3000
  API_URL = 'http://localhost:3000';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string) {
    return this.http.get(`${this.API_URL}/${endpoint}`);
  }

  post(endpoint: string, data: Object){
    return this.http.post(`${this.API_URL}/${endpoint}`,data);

  }
}
