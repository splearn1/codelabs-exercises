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
  taskRemove: boolean;

  constructor( private taskService: TaskListService, public dialog: MatDialog) {}

  ngOnInit(): void {
      this.tasks = this.taskService.getTasks();
      this.sub = this.taskService.taskChanged.subscribe((tasks)=>{
        this.tasks = tasks;
      })
      console.log(this.tasks);
  }


      // generate new ID
  generateId(): number {
    return Math.floor(Math.random() * 9000) + 1000;
  }

      //push new task to array
  addNewTask() {
      const dialogRef = this.dialog.open(TaskModal, {
        data: {id: this.generateId(), name: this.name, priority: this.priority, status: this.status, dueDate: this.dueDate},
      })

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.taskService.addTask(result);
      });
    }

      //show the data in pop-up with the specific task you want to edit
  onUpdate(index: number) {
    const taskToEdit = this.taskService.getTasks();
    const dialogRef = this.dialog.open(TaskModal, {
      data: {id: taskToEdit[index].id, name: taskToEdit[index].name, priority: taskToEdit[index].priority, status: taskToEdit[index].status, dueDate: taskToEdit[index].dueDate},
    });
     // UPDATE CHANGED TASK
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.taskService.deleteTask(index);   // ASK ABOUT THIS!!
      this.taskService.addTask(result);

    });

  }

  onDelete(index: number) {
      // alert('Task will be deleted.');
      // this.taskService.deleteTask(index);
      const taskToEdit = this.taskService.getTasks();
      const dialogRef = this.dialog.open(TaskModal, {
        data: {id: taskToEdit[index].id, name: taskToEdit[index].name, priority: taskToEdit[index].priority, status: taskToEdit[index].status, dueDate: taskToEdit[index].dueDate},
      });
      //  give warning before - UPDATE CHANGED TASK
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.taskService.deleteTask(index);
      });


    }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}
}
