import { FormGroup} from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAmRealHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../service/hero-lib.service';
import { MainFormService } from '../main page/main-form-builder.service.ts';

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent {
  public editForm: FormGroup;
  public arr: IAmRealHero[] = [];
  public skills: string[] = [];
  public allSkills: string[] = [];
  
  constructor(
    private readonly _formBuilder: MainFormService,
    private readonly _dialogRef: MatDialogRef<DialogComponent>,
    private readonly _heroService: HeroService,
    @Inject(MAT_DIALOG_DATA) public data: IAmRealHero
  ) {
    this.arr = this._heroService.heroes;
    this.allSkills = this._heroService.skills;
    this.allSkills = this.allSkills.concat(this.data.skills);
    this.editForm = this._formBuilder.createHero();
    this.editForm.patchValue(data);
  }

  public onOkClick(): void {
    if (this.editForm.valid) {
      this._dialogRef.close(this.editForm.value);
    }
  }

  public onNoClick(): void {
    this._dialogRef.close();
  }
}
