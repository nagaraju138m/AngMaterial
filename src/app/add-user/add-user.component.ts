import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  GenderList = ["Male", "Female", "OtheR"]
  userForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserServiceService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userEmail: new FormControl('', { validators: [Validators.required, Validators.email] }),
      date: ['', Validators.required],
      UserCate: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      comments: ['', Validators.required]
    })
  }
  addUser() {
    if (this.userForm.valid) {
      this.service.addUsers(this.userForm.value)
        .subscribe({
          next: (res) => {
            alert("product Added successfully");
          },
          error: () => {
            alert("error while adding the User")
          }
        });
    }

  }

}
