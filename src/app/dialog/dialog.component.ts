import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {
  userForm: FormGroup

  constructor(private fb:FormBuilder, private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data);
    
    this.userForm = this.fb.group({
      name: [`${!data.alumno ? '' : data.alumno.name}`, Validators.required],
      lastname: [`${!data.alumno ? '' : data.alumno.lastname}`,Validators.required],
      inscription: [`${!data.alumno ? '' : formatDate(data.alumno.inscription, 'yyyy-MM-dd', 'en')}`,Validators.required],
    })
  }

  getData(){
    console.log(this.userForm.getRawValue());
    this.dialogRef.close({alumno: this.userForm.getRawValue(), mode: this.data.alumno === null ? "add" : "edit"});
  }
}
