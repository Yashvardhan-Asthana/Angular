import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-table',
  standalone: false,
  
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent implements OnInit {
  employees: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.http.get<any[]>('http://localhost:8080/api/employees')
      .subscribe(
        data => this.employees = data,
        error => console.error('Error fetching employee data', error)
      );
  }
}
