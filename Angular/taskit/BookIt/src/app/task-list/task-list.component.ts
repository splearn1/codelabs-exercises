import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../task-list.service';
import { Task } from '../shared/task.model';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  id: number;
  name: string;
  priority: string;
  dueDate: Date;
  status: string;

  constructor( private taskService: TaskListService, public dialog: MatDialog) {}

ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
}
addNewTask() {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {id: this.id, name: this.name, priority: this.priority, status: this.status, dueDate: this.dueDate},
    })
    console.log(this.priority);
    //generate new ID, push new task to array, edit

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }
}
