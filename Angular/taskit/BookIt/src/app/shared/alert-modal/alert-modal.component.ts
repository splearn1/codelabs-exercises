import { Component } from '@angular/core';
import {
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})

export class AlertModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AlertModalComponent>,
    ) {}
  }
