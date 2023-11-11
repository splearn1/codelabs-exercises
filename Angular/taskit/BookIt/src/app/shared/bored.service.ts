import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoredService {


  constructor(private http: HttpClient) {}
  onFetchRandomTask() {
    // Send HTTP GET Request to the bored api endpoint using the tranformed input query
    this.http
      .get('https://www.boredapi.com/api/activity/')
      .subscribe((randomTask) => {
        console.log('randomTask', randomTask);
        return randomTask;
      });
  }
}
