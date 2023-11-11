import { Injectable } from '@angular/core';
import { Task } from './shared/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskListService {
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
    {
      "id": 8,
      "name": "Flower arranging",
      "status": "in-progress",
      "dueDate": new Date ("Nov 15, 2023 1:00 PM"),
      "priority": "high"
    },
    {
      "id": 9,
      "name": "Whittling",
      "status": "in-progress",
      "dueDate": new Date ("Dec 22, 2023 8:05 AM"),
      "priority": "medium"
    },
    {
      "id": 10,
      "name": "Skiing",
      "status": "todo",
      "dueDate": new Date ("Nov 25, 2023 6:32 AM"),
      "priority": "medium"
    },
    {
      "id": 11,
      "name": "Basketball",
      "status": "in-progress",
      "dueDate": new Date ("Dec 30, 2023 3:55 PM"),
      "priority": "low"
    },
    {
      "id": 12,
      "name": "Machining",
      "status": "todo",
      "dueDate": new Date ("Dec 7, 2023 1:07 AM"),
      "priority": "low"
    },
    {
      "id": 13,
      "name": "Soapmaking",
      "status": "complete",
      "dueDate": new Date ("Dec 22, 2023 6:08 AM"),
      "priority": "medium"
    },
    {
      "id": 14,
      "name": "Roller skating",
      "status": "complete",
      "dueDate": new Date ("Nov 25, 2023 6:00 AM"),
      "priority": "high"
    },
    {
      "id": 15,
      "name": "Quilting",
      "status": "complete",
      "dueDate": new Date ("Dec 21, 2023 10:14 AM"),
      "priority": "medium"
    },
    {
      "id": 16,
      "name": "Fashion",
      "status": "in-progress",
      "dueDate": new Date ("Dec 10, 2023 2:11 AM"),
      "priority": "low"
    },
    {
      "id": 17,
      "name": "Lego building",
      "status": "todo",
      "dueDate": new Date ("Dec 27, 2023 6:50 PM"),
      "priority": "high"
    },
    {
      "id": 18,
      "name": "Photography",
      "status": "complete",
      "dueDate": new Date ("Nov 27, 2023 12:15 AM"),
      "priority": "high"
    },
    {
      "id": 19,
      "name": "Base jumping",
      "status": "in-progress",
      "dueDate": new Date ("Nov 30, 2023 7:31 AM"),
      "priority": "high"
    },
    {
      "id": 20,
      "name": "Roller skating",
      "status": "todo",
      "dueDate": new Date ("Dec 2, 2023 3:33 PM"),
      "priority": "low"
    },
    {
      "id": 21,
      "name": "Baseball",
      "status": "todo",
      "dueDate": new Date ("Nov 12, 2023 2:45 AM"),
      "priority": "medium"
    },
    {
      "id": 22,
      "name": "Photography",
      "status": "in-progress",
      "dueDate": new Date ("Nov 19, 2023 10:05 PM"),
      "priority": "medium"
    },
    {
      "id": 23,
      "name": "Stand-up comedy",
      "status": "complete",
      "dueDate": new Date ("Nov 19, 2023 1:09 PM"),
      "priority": "high"
    },
    {
      "id": 24,
      "name": "Homebrewing",
      "status": "in-progress",
      "dueDate": new Date ("Nov 26, 2023 5:11 PM"),
      "priority": "medium"
    },
    {
      "id": 25,
      "name": "Polo",
      "status": "in-progress",
      "dueDate": new Date ("Dec 17, 2023 9:24 PM"),
      "priority": "high"
    },
    {
      "id": 26,
      "name": "Mountaineering",
      "status": "in-progress",
      "dueDate": new Date ("Nov 13, 2023 7:48 PM"),
      "priority": "medium"
    },
    {
      "id": 27,
      "name": "Homebrewing",
      "status": "todo",
      "dueDate": new Date ("Dec 28, 2023 7:21 AM"),
      "priority": "low"
    },
    {
      "id": 28,
      "name": "Acting",
      "status": "todo",
      "dueDate": new Date ("Dec 11, 2023 1:23 AM"),
      "priority": "medium"
    },
    {
      "id": 29,
      "name": "Drawing",
      "status": "complete",
      "dueDate": new Date ("Nov 24, 2023 11:21 PM"),
      "priority": "low"
    },
    {
      "id": 30,
      "name": "Orienteering",
      "status": "todo",
      "dueDate": new Date ("Nov 10, 2023 12:58 PM"),
      "priority": "medium"
    },
    {
      "id": 31,
      "name": "Running",
      "status": "in-progress",
      "dueDate": new Date ("Nov 19, 2023 6:25 PM"),
      "priority": "medium"
    },
    {
      "id": 32,
      "name": "Creative writing",
      "status": "todo",
      "dueDate": new Date ("Nov 5, 2023 5:19 AM"),
      "priority": "medium"
    },
    {
      "id": 33,
      "name": "Drama",
      "status": "todo",
      "dueDate": new Date ("Nov 8, 2023 11:29 PM"),
      "priority": "medium"
    },
    {
      "id": 34,
      "name": "Slacklining",
      "status": "in-progress",
      "dueDate": new Date ("Dec 14, 2023 9:19 PM"),
      "priority": "high"
    },
    {
      "id": 35,
      "name": "Rappelling",
      "status": "todo",
      "dueDate": new Date ("Nov 12, 2023 6:04 PM"),
      "priority": "medium"
    },
    {
      "id": 36,
      "name": "Skiing",
      "status": "complete",
      "dueDate": new Date ("Dec 30, 2023 2:06 AM"),
      "priority": "low"
    },
    {
      "id": 37,
      "name": "Quilting",
      "status": "complete",
      "dueDate": new Date ("Nov 2, 2023 4:45 AM"),
      "priority": "low"
    },
    {
      "id": 38,
      "name": "Rafting",
      "status": "complete",
      "dueDate": new Date ("Nov 19, 2023 3:26 AM"),
      "priority": "low"
    },
    {
      "id": 39,
      "name": "Snowboarding",
      "status": "complete",
      "dueDate": new Date ("Nov 28, 2023 2:35 PM"),
      "priority": "low"
    },
    {
      "id": 40,
      "name": "Homebrewing",
      "status": "complete",
      "dueDate": new Date ("Dec 30, 2023 8:56 AM"),
      "priority": "low"
    },
    {
      "id": 41,
      "name": "Roller skating",
      "status": "complete",
      "dueDate": new Date ("Dec 21, 2023 9:06 PM"),
      "priority": "low"
    },
    {
      "id": 42,
      "name": "Digital arts",
      "status": "complete",
      "dueDate": new Date ("Dec 10, 2023 6:50 AM"),
      "priority": "medium"
    },
    {
      "id": 43,
      "name": "Table tennis",
      "status": "todo",
      "dueDate": new Date ("Nov 4, 2023 6:07 PM"),
      "priority": "medium"
    },
    {
      "id": 44,
      "name": "Origami",
      "status": "complete",
      "dueDate": new Date ("Nov 18, 2023 2:21 PM"),
      "priority": "medium"
    },
    {
      "id": 45,
      "name": "Jogging",
      "status": "complete",
      "dueDate": new Date ("Nov 28, 2023 1:41 AM"),
      "priority": "medium"
    },
    {
      "id": 46,
      "name": "Crocheting",
      "status": "complete",
      "dueDate": new Date ("Dec 12, 2023 6:34 PM"),
      "priority": "medium"
    },
    {
      "id": 47,
      "name": "Pottery",
      "status": "in-progress",
      "dueDate": new Date ("Dec 7, 2023 12:24 AM"),
      "priority": "low"
    },
    {
      "id": 48,
      "name": "Sculpting",
      "status": "in-progress",
      "dueDate": new Date ("Nov 27, 2023 12:17 PM"),
      "priority": "medium"
    },
    {
      "id": 49,
      "name": "Writing",
      "status": "todo",
      "dueDate": new Date ("Nov 19, 2023 7:23 PM"),
      "priority": "medium"
    },
    {
      "id": 50,
      "name": "Lego building",
      "status": "in-progress",
      "dueDate": new Date ("Nov 29, 2023 7:36 AM"),
      "priority": "medium"
    }
  ]

  constructor() { }

  getTasks() {
    return this.tasks.slice();
  }
}
