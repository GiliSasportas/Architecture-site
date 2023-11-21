import { HttpSentEvent } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ModernComponent } from '../modern/modern.component';
import { PrivateHomeComponent } from '../private-home/private-home.component';
import { Service } from '../service';

@Component({
   selector: 'app-service',
   templateUrl: './service.component.html',
   styleUrls: ['./service.component.scss']
})
export class ServiceComponent {


   modernes: Array<Service> = [];

   privatehome = "בתים פרטיים";
   modern = " אדריכלות מודרנית";
   services: Array<Service> = [];

   constructor(public http: HttpService, private router: Router) {
      this.http.getmodern().subscribe(data => { this.modernes = data; console.log(data) }, (error) => { console.log("error" + error) })
     
   }
   
   cmodern(item: Service) {
     
      this.router.navigate(['privatehome/service', item]);
  
   }





}
