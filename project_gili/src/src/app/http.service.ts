import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Appeal } from './appeal';
import { Observable } from 'rxjs/internal/Observable';

import { reply } from './reply';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  appeal:Appeal={};
  env1:string="https://localhost:44313//api";
  

  constructor(private http:HttpClient) { }


  getAll():Observable<Appeal[]>{
    return this.http.get<Appeal[]>(this.env1+"/server");
  }
  getreply():Observable<Appeal[]>{
    return this.http.get<Appeal[]>(this.env1+"/reply");
  }
  
  add(appeal:Appeal){
    return this.http.post(this.env1+"/server",appeal);
  }
  addreply(reply:reply){
    return this.http.post(this.env1+"/reply",reply);
  }
  
  getprivatehome():Observable<Service[]>{
    return this.http.get<Service[]>(this.env1+"/se");
  }
  getmodern():Observable<Service[]>{
    return this.http.get<Service[]>(this.env1+"/se");
  }
  Put(like:reply){
    return this.http.put(this.env1+"/reply",like);
    
   
  }
  getlike():Observable<reply[]>{
    return this.http.get<reply[]>(this.env1+"/reply");
   
  }
}