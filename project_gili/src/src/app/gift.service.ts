import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiftserviceService {
 
  constructor() { }
  public userSubject$:Subject<string>=new Subject;
  appealBehaviorSubject:BehaviorSubject<string>=new BehaviorSubject("בהוספת תגובה-זכאי למתנה");
   
    
  getSubject(){
    return this.appealBehaviorSubject;
  }
  
  
}
// 