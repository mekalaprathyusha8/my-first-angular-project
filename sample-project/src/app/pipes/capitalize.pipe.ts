// interface Demo{
//     a:number;
//     chintu():string;
// }

// class Test implements Demo {
//     a = 3
//     chintu(){
//         return ""
//     }
// }
// let t: Demo = {
//     a: 3,
//     chintu:() =>{
//         return "html"
//     }
// }
import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
    name: 'captalize',
    standalone:true
})
export class CapitalizePipe implements PipeTransform {
    transform(value: any, ...args: any[]){
    //    return value + " is a student";
    value = value.charAt(0).toUpperCase() +""+ value.slice(1);
    return value;
    }
}