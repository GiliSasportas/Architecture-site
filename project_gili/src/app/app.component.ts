import { Component } from '@angular/core';
import { GiftserviceService } from './gift.service';
import { DatePipe } from '@angular/common';
import { OurPipePipe } from './our-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title=Date.now();
  private readonly newProperty = "gili";

  mypipe=this.newProperty
  color='lightgreen';
  constructor(public ser:GiftserviceService){
    
  }
}

