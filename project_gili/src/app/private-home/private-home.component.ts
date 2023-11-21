import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Service } from '../service';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss']
})
export class PrivateHomeComponent {
  services: Array<Service> = [];
  ser: Service = {};
  constructor(public http: HttpService, public route: ActivatedRoute ,private router:Router) {
 
  }
  ngOnInit():void{
    this.route.params.subscribe((params: Params) => {
      this.ser = params;
    });
    
  }
  close(){
    this.router.navigate(['service']);
   }
}