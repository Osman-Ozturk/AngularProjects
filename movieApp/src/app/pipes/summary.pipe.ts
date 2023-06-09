import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string,limit?:number){
    if(value){
      let actualLimit = (limit)?limit:20;
      if (actualLimit > value.length) {
        return value;
      }
      return value.substring(0,actualLimit) + '...';
      }else {
        return null;
      }
    }
  }
