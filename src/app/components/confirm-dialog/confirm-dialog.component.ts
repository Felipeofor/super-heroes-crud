import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>Confirmación</h2>
    <mat-dialog-content>
      <p>¿Estás seguro de que deseas eliminar este superhéroe?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button class="button-cancel" (click)="onNoClick()">Cancelar</button>
      <button mat-button class="button-delete" (click)="onConfirm()">Eliminar</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
