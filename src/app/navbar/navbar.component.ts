import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserServiceService } from '../user-service.service';
;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service:UserServiceService,private dialog: MatDialog) { }

  openAdd() {
    this.dialog.open(AddUserComponent , {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val === "save"){
        this.getAllUsers();
      }
    })
  }

  ngOnInit(): void {
  }

  getAllUsers(){
    this.service.getUsers()
    .subscribe({
      next:res=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:err=>{
        alert("Error while fetching the users!!");
      }
    });
  }
}
