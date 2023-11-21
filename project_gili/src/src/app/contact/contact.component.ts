import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { Appeal } from '../appeal';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  constructor( public http:HttpService) { }
 
  @Output()
  onSaveAppeal:EventEmitter<Appeal>=new EventEmitter<Appeal>();
  appeals:Array<Appeal>=[];
   model = new Appeal();
   PostAppeal = new Appeal();
   submitted = false;


 onSubmit() { 
  this.submitted = true; 
  this.onSaveAppeal.emit(this.model);
  alert("הפניה התקבלה בהצלחה!"); 
  this.PostAppeal.Name=this.model.Name;
  this.PostAppeal.Email=this.model.Email;
  this.PostAppeal.BodyAppeal=this.model.BodyAppeal;
  console.log(111)
  this.http.add(this.PostAppeal).subscribe(data => {console.log(data)},(error)=>{console.log("error"+error)})
  console.log('after data')

  console.log(333)
  this.http.getAll().subscribe(data =>  {this.appeals=data;console.log(data)},(error)=>{console.log("error"+error)})
  console.log('after data')
}

}
