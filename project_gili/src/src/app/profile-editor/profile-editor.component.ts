import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { GiftserviceService } from '../gift.service';
import { HttpService } from '../http.service';
import { reply } from '../reply';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  addreply:reply={};
  replies:Array<reply>=[];
  profileForm = this.fb.group({
   Name: ['', [Validators.required , Validators.pattern('[a-zA-Z]*')]],
   Email: ['', [Validators.required, Validators.email]],
   phone: ['', [Validators.required , Validators.pattern('[0-9]*')]],
   BodyReply: ['', [Validators.required , Validators.pattern('[a-zA-Z]*')]],


 

  });

  

  constructor(private fb: FormBuilder,private http:HttpService,private gift:GiftserviceService) { }

  updateProfile() {
    
     this.profileForm.patchValue({
       Name: '',
       Email: '',
       phone: '',
       BodyReply: '',
     
    });
  }

  

  onSubmit() {
    
  
    console.log(111)
    this.http.addreply(new reply(this.profileForm.value.Name?.toString(),this.profileForm.value.Email?.toString(),this.profileForm.value.phone?.toString(),this.profileForm.value.BodyReply?.toString())).subscribe(data => {console.log(data)},(error)=>{console.log("error"+error)})
    console.log('after data')
  
    console.log(333)
    this.http.getAll().subscribe(data =>  {this.replies=data;console.log(data)},(error)=>{console.log("error"+error)})
    console.log('after data')
   this.gift.appealBehaviorSubject.next("הינך זכאי למתנה")
   alert("תגובתך התקבלה בהצלחה!!!!")
    



  }
}
