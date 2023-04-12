import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {
  userForm: FormGroup

  constructor(private fb:FormBuilder, private dialogRef: MatDialogRef<DialogComponent>){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['',Validators.required],
      inscription: ['',Validators.required],
    })
  }
  getData(){
    console.log(this.userForm.getRawValue());
    this.dialogRef.close(this.userForm.getRawValue());
  }
}
