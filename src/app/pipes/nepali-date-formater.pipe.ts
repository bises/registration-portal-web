import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'nepaliDateFormater'
})
export class NepaliDateFormaterPipe implements PipeTransform {

  constructor(private datePipe: DatePipe){
    
  }

  transform(value: any, ...args: any[]): any {
    let dateFormat = this.datePipe.transform(value, 'yyyy.MM.dd');
    return null;
  }

}
