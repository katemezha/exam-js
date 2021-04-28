import { Injectable } from '@angular/core';
import { Persons } from './components/add/models/persons.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
 persons:Persons[];
  constructor(private http: HttpClient) {
   }


}
