import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  GenderList = ["Male", "Female", "OtheR"]
  userForm !: FormGroup;
  actionBtn : string = "Save"
  constructor(private dialog: MatDialog,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private service: UserServiceService,
    private dialogclo:MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: new FormControl('', { validators: [Validators.required, Validators.email] }),
      date: ['', Validators.required],
      UserCate: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      comments: ['', Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.userForm.controls['userName'].setValue(this.editData.userName);
      this.userForm.controls['userEmail'].setValue(this.editData.userEmail);
      this.userForm.controls['date'].setValue(this.editData.date);
      this.userForm.controls['UserCate'].setValue(this.editData.UserCate);
      this.userForm.controls['gender'].setValue(this.editData.gender);
      this.userForm.controls['phone'].setValue(this.editData.phone);
      this.userForm.controls['comments'].setValue(this.editData.comments);
    }
  }
  addUser() {
    if(!this.editData){
      if (this.userForm.valid) {
        this.service.addUsers(this.userForm.value)
          .subscribe({
            next: (res) => {
              alert("product Added successfully");
              this.dialogclo.close('save');
            },
            error: () => {
              alert("error while adding the User")
              this.dialogclo.close();
            }
          });
      }
    }
    else{
      this.updateUser();
    }
  }
  updateUser(){
    this.service.putUser(this.userForm.value, this.editData.id)
    .subscribe({
      next:res=>{
        alert("User updated successfully");
        this.dialogclo.close('update');
      },
      error:ere=>{
        alert("failure for adding user");
      }
    })
  }


}
