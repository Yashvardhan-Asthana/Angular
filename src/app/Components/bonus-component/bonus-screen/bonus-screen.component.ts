import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bonus-screen',
  standalone: false,
  
  templateUrl: './bonus-screen.component.html',
  styleUrl: './bonus-screen.component.css'
})
export class BonusScreenComponent implements OnInit {
  employees: any[] = []; // Initialize as an empty array

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmployees(); // Call the fetch method when the component initializes
  }

  // Method to fetch employee data from the backend
  fetchEmployees(): void {
    this.http.get<any[]>('http://localhost:3000/employees')
      .subscribe(
        data => {
          this.employees = data; // Update the employees array with the fetched data
        },
        error => {
          console.error('Error fetching employee data', error); // Handle errors
        }
      );
  }
}
// export class BonusScreenComponent  implements OnInit{

//   employees: any[] = [
//     {
//       name: 'John Doe',
//       designation: 'Software Engineer',
//       joiningDate: '2023-01-15',
//       installmentAmount: 1000,
//       totalInstallments: 12,
//       installmentPeriod: 'Monthly',
//     },
//     {
//       name: 'Jane Smith',
//       designation: 'Product Manager',
//       joiningDate: '2022-07-10',
//       installmentAmount: 1500,
//       totalInstallments: 6,
//       installmentPeriod: 'Bi-Monthly',
//     }
//   ];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.fetchEmployees();
//   }

//   fetchEmployees(): void {
//     this.http.get<any[]>('http://localhost:8080')
//       .subscribe(
//         data => this.employees = data,
//         error => console.error('Error fetching employee data', error)
//       );
//   }

// }
