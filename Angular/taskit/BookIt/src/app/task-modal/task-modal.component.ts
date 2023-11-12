import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../shared/task.model';


@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModal {

  constructor(
    public dialogRef: MatDialogRef<TaskModal>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}


    onNoClick(): void {
      this.dialogRef.close();
    }
  }
