import { Injectable } from '@angular/core';
import { Task } from './shared/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskListService {
  taskChanged: Subject<Task[]> = new Subject<Task[]>();

  private tasks: Task[] = [
    {
      "id": 1,
      "name": "Rock climbing",
      "status": "complete",
      "dueDate": new Date ("Dec 19, 2023 4:18 PM"),
      "priority": "high"
    },
    {
      "id": 2,
      "name": "Sketching",
      "status": "in-progress",
      "dueDate": new Date ("Dec 15, 2023 9:56 AM"),
      "priority": "medium"
    },
    {
      "id": 3,
      "name": "Embroidery",
      "status": "in-progress",
      "dueDate": new Date ("Dec 26, 2023 6:39 PM"),
      "priority": "low"
    },
    {
      "id": 4,
      "name": "Dance",
      "status": "todo",
      "dueDate": new Date ("Dec 16, 2023 9:10 PM"),
      "priority": "medium"
    },
    {
      "id": 5,
      "name": "Backpacking",
      "status": "in-progress",
      "dueDate": new Date ("Dec 6, 2023 10:40 PM"),
      "priority": "medium"
    },
    {
      "id": 6,
      "name": "Fashion",
      "status": "complete",
      "dueDate": new Date ("Nov 27, 2023 11:06 AM"),
      "priority": "medium"
    },
    {
      "id": 7,
      "name": "Sailing",
      "status": "in-progress",
      "dueDate": new Date ("Dec 25, 2023 7:20 AM"),
      "priority": "high"
    },

  ]

  constructor() { }

  getTasks() {
    return this.tasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskChanged.next(this.tasks.slice());
    console.log(this.tasks);
  }

  updateTask(task: Task) {
    this.taskChanged.next(this.tasks);
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.taskChanged.next(this.tasks);
  }
}
