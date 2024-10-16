import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperHero } from 'src/app/models/super-hero.model';

@Component({
  selector: 'app-create-hero-dialog',
  templateUrl: './create-hero-dialog.component.html',
  styleUrls: ['./create-hero-dialog.component.scss']
})
export class CreateHeroDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SuperHero | null
  ) {
    this.form = this.fb.group({
      name: [data?.name || '', Validators.required],
      powers: [data?.powers.toString() || '', Validators.required],
      origin: [data?.origin || '', Validators.required],
    });
  }

  save(): void {
    if (this.form.valid) {
      console.log(this.form.value.powers);
      const powersValue = this.form.value.powers || '';
      const powersArray = powersValue.split(',').map((p: string) => p.trim());
      const originValue = this.form.value.origin || '';

      const updatedHero = {
        ...this.form.value,
        powers: powersArray,
        origin: originValue
      };

      this.dialogRef.close(updatedHero);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
