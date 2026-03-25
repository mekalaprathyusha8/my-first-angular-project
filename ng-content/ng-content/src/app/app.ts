import { Component } from '@angular/core';
import { Card } from './card/card';
import { CardHeader } from './card/card-header/card-header';
import { CardFooter } from './card/card-footer/card-footer';
import { CardBody } from './card/card-body/card-body';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Card,CardHeader,CardBody,CardFooter]
})
export class App {
  
}
