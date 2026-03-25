import { Component, Host, HostBinding, HostListener } from '@angular/core';
import { HighlightDirective } from '../directices/highlight.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
  // host: {
  //   'role':'card',
  //   '[class.active]':'active',
  //   '(mouseenter)':'mouseEnter()',
  //   '(mouseleave)':'mouseLeave()'
  // }
})
export class Card {
  @HostBinding('class.active')
  active= false

  @HostListener('mouseenter')
  mouseEnter(){
    this.active= true;
  }
  @HostListener('mouseleave')
  mouseLeave(){
    this.active= false;
  }
}
