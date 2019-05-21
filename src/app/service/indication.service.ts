import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IndicationService {


  constructor(private http: HttpClient, private router: Router) { }


  getIndications() {
    return this.http.get(Globals.APP_API + 'indication');

  }

  getIndication(id: string) {
    return this.http.get(Globals.APP_API + 'indication' + '/' + id);
  }


  deleteIndication(id: number) {
    return this.http.delete(Globals.APP_API + 'indication' + '/' + id);
  }

  createIndication(description: string) {
    const data = { description };
    return this.http.post(Globals.APP_API + 'indication', data);
  }

  editIndication(id: number, description: string) {
    const data = { description };
    return this.http.put(Globals.APP_API + 'indication' + '/' + id, data);
  }
}
