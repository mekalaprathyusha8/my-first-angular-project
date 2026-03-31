import { Component } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // dependency injection
  constructor(private sampleService: SampleService) {
    console.log('Home component');
    sampleService.title = "Home title";
  }
  ngOnDestroy() {
    console.log('Home component destroyed');
  }
}
  