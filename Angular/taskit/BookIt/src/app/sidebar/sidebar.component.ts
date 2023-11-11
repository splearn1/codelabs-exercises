import { Component } from '@angular/core';
import { BoredService } from '../shared/bored.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  randomTask;

  constructor(private boredService: BoredService) {}

getRandomTask(){
  this.randomTask = this.boredService.onFetchRandomTask();
}
}
