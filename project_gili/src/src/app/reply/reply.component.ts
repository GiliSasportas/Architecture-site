import { Component, Input } from '@angular/core';
import { reply } from '../reply';
import { HttpService } from '../http.service';
import { ShowReplyComponent } from '../show-reply/show-reply.component';


@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent {
  
  replies:Array<reply>=[];
  addreply:boolean=false;
 

 constructor( public http:HttpService) { }
  
 
 
  ngOnInit(): void {
    console.log(333)
    this.http.getreply().subscribe(data => {this.replies=data;console.log(data)},(error)=>{console.log("error"+error)})
    console.log('after data')
    
  }
  
}
