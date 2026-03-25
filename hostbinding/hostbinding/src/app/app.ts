import { Component} from '@angular/core';
import { Card } from './card/card';
import { HighlightDirective } from './directices/highlight.directive';
import { InputNameDirective } from './directices/input-name.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card, HighlightDirective, InputNameDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users=[
    {name:'John',age:30 ,gender:'Male'},
    {name:'Jane',age:25,gender:'Female'},
    {name:'Doe',age:35,gender:'Male'},
    {name:'Smithi',age:28,gender:'Female'},
    {name:'Smith',age:32,gender:'Male'},
    {name:'Emily',age:27,gender:'Female'}
  ];
  active=true;
  mouseenter(){
    this.active= true;
  }
  mouseleave(){
    this.active= false;
  }
}
