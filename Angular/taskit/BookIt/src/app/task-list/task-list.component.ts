import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskListService } from '../task-list.service';
import { Task } from '../shared/task.model';
import { TaskModal } from '../task-modal/task-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  id: number;
  name: string;
  priority: string;
  dueDate: Date;
  status: string;
  sub: Subscription;

  constructor( private taskService: TaskListService, public dialog: MatDialog) {}

ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.sub = this.taskService.taskChanged.subscribe((tasks)=>{
      this.tasks = tasks;
    })
    console.log(this.tasks);
}

ngOnDestroy(): void {
    this.sub.unsubscribe();
}
// generate new ID
generateId(): number {
  return Math.floor(Math.random() * 9000) + 1000;
}
addNewTask() {
    const dialogRef = this.dialog.open(TaskModal, {
      data: {id: this.generateId(), name: this.name, priority: this.priority, status: this.status, dueDate: this.dueDate},
    })

    //push new task to array, edit

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.taskService.addTask(result);
    });
  }

  onUpdate() {
    const dialogRef = this.dialog.open(TaskModal, {
      data: {id: this.generateId(), name: this.name, priority: this.priority, status: this.status, dueDate: this.dueDate},
    })

    //push new task to array, edit

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.taskService.updateTask(result);
    });
  }

  onDelete(index: number) {
    this.taskService.deleteTask(index);
  }
}
