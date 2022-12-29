import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'userEmail', 'date', 'UserCate', 'gender', 'phone', 'comments', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private service:UserServiceService) { }

  ngOnInit(): void {
    this.getAllUsers();
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editUser(row:any){
    this.dialog.open(AddUserComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(res=>{
      if(res==="update"){
        this.getAllUsers();
      }
    })
  }
  deleteUser(id:number){
    this.service.deleteuser(id).subscribe({
      next:res=>{
        alert("product Deleted successfully");
        this.getAllUsers();
      },
      error:()=>{
        alert("error while deleting the product!!");
      }
    })
  }
}
