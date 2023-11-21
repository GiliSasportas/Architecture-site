import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ourPipe'
})
export class OurPipePipe implements PipeTransform {

  transform(str: string): any {
    let newStr = str.substr(0);

    
      newStr += ':';
    

    return newStr;
  }
}
