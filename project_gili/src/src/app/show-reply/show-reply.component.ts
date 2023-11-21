import { Component, Input } from '@angular/core';
import { reply } from '../reply';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-reply',
  templateUrl: './show-reply.component.html',
  styleUrls: ['./show-reply.component.scss']
})
export class ShowReplyComponent {
   likes:Array<reply>=[];
  @Input()
  reply: reply = {}
 
  constructor(public http:HttpService){

  }
  addlike(like:reply){ 
      this.http.Put(like).subscribe(data => {console.log(data),console.log(like.Numlike),like.Numlike=Number(data)},(error)=>{console.log("error"+error)})
      this.http.getlike().subscribe(data => {this.likes=data;console.log(data)},(error)=>{console.log("error"+error)})

     
     
  }
}
