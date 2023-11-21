import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ouerPipe'
})
export class OuerPipePipe implements PipeTransform {

 
    transform(str: string): any {
      let newStr = str.substr(0);
  
      
        newStr += ':';
     
  
      return newStr;
    }

}
