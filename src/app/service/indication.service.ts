import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IndicationService {

  constructor(private http: HttpClient, private router: Router) { }
  uri = Globals.APP_API + 'indication';

  getIndications() {
    return this.http.get(this.uri);

  }

  getIndicationById(id: string){
    return this.http.get(this.uri + '/' + id);
  }

  deleteIndication(id: string){
    return this.http.delete(this.uri + '/' + id);
  }

  createIndication(): void {
    this.router.navigate(['indication/add']);
  }
}
