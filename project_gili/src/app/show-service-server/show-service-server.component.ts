import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Service } from '../service';

@Component({
  selector: 'app-show-service-server',
  templateUrl: './show-service-server.component.html',
  styleUrls: ['./show-service-server.component.scss']
})
export class ShowServiceServerComponent {
  constructor(public http:HttpService,public route:ActivatedRoute){ }
  @Input()
  item:Service={};
  service:any={};
  ngOnInit(): void {
    console.log("lppppppppp")
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.http.getServices().subscribe(
          ser => {this.service=ser.find(t=>t.TypeService===id);console.log(this.service)},(error)=>{console.log("error"+error)})
          
      console.log(this.item.MoreDitilse);
    });
  }
}
