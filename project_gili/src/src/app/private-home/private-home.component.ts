import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(public http: HttpService, public route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.ser = params;
    });
  }
}
