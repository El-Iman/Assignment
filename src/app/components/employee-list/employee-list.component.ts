import { Component } from '@angular/core';

@Component({
  selector: 'employeee',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})


export class EmployeeListComponent{

      EMPLOYEE = [
    {
      name: 'Ahmed',
      email: 'ahmed@g.com',
      role: 'User'
    },
    {
      name: 'Mohammed',
      email: 'mohammed@g.com',
      role: 'Admin'
    },
    {
      name: 'Ahmed',
      email: 'ahmed@g.com',
      role: 'User'
    },
    {
      name: 'Mohammed',
      email: 'mohammed@g.com',
      role: 'Admin'
    }
    ,
    {
      name: 'Mohammed',
      email: 'mohammed@g.com',
      role: 'Admin'
    }
    ,
    {
      name: 'Mohammed',
      email: 'mohammed@g.com',
      role: 'Admin'
    }
  ];



  filter: string = "";
  clearSearch() {
    this.filter = "";
  }



}
