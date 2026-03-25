import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: '[Highlight]',
  standalone: true,

})

export class HighlightDirective {
    @HostBinding('style.backgroundColor') backgroundColor= 'white';

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = 'yellow';
    }
    @HostBinding('style.color') color= 'black';
    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = 'white';
    }

}