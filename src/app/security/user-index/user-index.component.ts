import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { userDTO } from '../security.models';
import { HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  constructor(private securityService: SecurityService){
  }

  users: userDTO[] | any;
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords: any;
  columnsToDisplay = ["email","actions"];

  ngOnInit(): void {
    this.securityService.getUsers(this.page,this.pageSize)
    .subscribe((httpResponse: HttpResponse<userDTO[]>) =>{
      this.users = httpResponse.body;
      this.totalAmountOfRecords = httpResponse.headers.get("totalAmountOfRecords");

    })
  }

  makeAdmin(userId: string){
    this.securityService.makeAdmin(userId).subscribe(() =>{
      Swal.fire("Success","The user has been marked as admin!","success");
    });
  }

  removeAdmin(userId: string){
    this.securityService.removeAdmin(userId).subscribe(() =>{
      Swal.fire("Success","Admin rights has been removed from this user","success");
    });
  }


}
