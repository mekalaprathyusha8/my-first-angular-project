import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe'
})
export class TimePipe implements PipeTransform {
    transform(time: any, ...args: any[]): any {
        
    let d1 = new Date(time);
    let d2 = new Date();
    let Diff =d2.getTime() - d1.getTime();
    let yearDiff = Math.ceil(Diff  / (1000*60*60*24*30*12));
    let monthDiff = Math.ceil(Diff / (1000*60*60*24*30));
    let dayDiff = Math.ceil(Diff   / (1000*60*60*24));
    let hourDiff = Math.ceil(Diff  / (1000*60*60));
    let minDiff = Math.ceil(Diff   / (1000*60 ));
    // return dayDiff;
    //return minDiff;
    return hourDiff;
    // return monthDiff;
    //return yearDiff;
  }
}