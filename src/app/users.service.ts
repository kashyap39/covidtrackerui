import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   constructor(public http:HttpClient){}
   getData(){
    let url="https://covid19.mathdro.id/api/countries/India";
    return this.http.get(url);
   }
   getState()
   {
     let url1="https://api.covid19india.org/state_district_wise.json";
       return this.http.get(url1);
   }
  }
