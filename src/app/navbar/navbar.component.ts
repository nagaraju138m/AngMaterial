import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';import { AddUserComponent } from '../add-user/add-user.component';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openAdd() {
    this.dialog.open(AddUserComponent , {
      width: '30%'
    });
  }

  ngOnInit(): void {
  }

}
