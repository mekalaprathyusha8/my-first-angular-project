import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Result1 } from './result1/result1';
import { Result2 } from './result2/result2';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Result1, Result2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data: string = '';
  result: string = 'result1';
}

