import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('/api/users')
      .map(result => this.result = result.json().data);
  }

  addUser(newUser) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/users', JSON.stringify(newUser), { headers })
      .map(result => this.result = result.json().data);
  }
}
