import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
    title=""
    constructor() {
        console.log("Sample Service");
    }
}