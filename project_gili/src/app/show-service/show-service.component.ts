import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent {
  service=new Service();

}
