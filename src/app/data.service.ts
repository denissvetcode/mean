import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getUsers() {
    return this._http.get('/api/users')
      .map(res => res.json().data);
  }

  addUser(newUser) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post('/api/users', JSON.parse(JSON.stringify(newUser)), { headers })
    .map(res => res.json().data);
  }
}
