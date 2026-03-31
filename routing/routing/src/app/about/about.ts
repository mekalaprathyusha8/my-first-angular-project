import { Component } from '@angular/core';
import { SampleService } from '../services/sample.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(private sampleService: SampleService) {
    console.log('About component');
    console.log(sampleService.title);
  }
}
