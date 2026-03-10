import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
    name: 'phone',
    standalone:true
})
export class PhonePipe implements PipeTransform {
    transform(value: any, ...args: any[]){
    //    return value + " is a student";
    value = value.toString().slice(0,3) + "-" + value.toString().slice(3,6) + "-" + value.toString().slice(6);
    return value;
    }
}