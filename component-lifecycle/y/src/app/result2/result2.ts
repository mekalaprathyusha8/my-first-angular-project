import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result2',
  standalone: true,
  templateUrl: './result2.html',
  styleUrl: './result2.css',
})
export class Result2 {
  @Input() data: any;
  
}
