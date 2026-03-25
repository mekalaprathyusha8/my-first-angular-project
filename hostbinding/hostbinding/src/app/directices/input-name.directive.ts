import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[InputName]',
  standalone: true
})
export class InputNameDirective {
    @HostBinding('style.border')
    border = "1px solid green";

    @HostListener('keyup', ['$event'])
    checktext(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;
        const value = input.value;
        console.log(value);
        const pattern = /^[a-zA-Z]+$/;
        if(pattern.test(value)){
            this.border = "1px solid ccc";
        }else{
            this.border = "1px solid red";
        }
    }
}