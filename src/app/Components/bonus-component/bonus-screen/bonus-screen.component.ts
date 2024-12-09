import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BonusService } from '../../bonus-component/bonus.service'; // Import the service

@Component({
  selector: 'app-bonus-screen',
  standalone: false,
  templateUrl: './bonus-screen.component.html',
  styleUrl: './bonus-screen.component.css'
})
export class BonusScreenComponent implements OnInit {
  employees: any[] = [];
  newEmployee = {
    name: '',
    designation: '',
    installmentAmount: null,
    totalInstallments: null,
    installmentPeriod: ''
  };
  editEmployee: any = null;
  currentEmployee: any = this.newEmployee; // Reference for form binding

  constructor(private http: HttpClient, private bonusService: BonusService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.bonusService.getBonuses().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.error('Error fetching employee data', error);
      }
    );
  }

  addBonus(): void {
    this.bonusService.createBonus(this.newEmployee).subscribe(
      response => {
        console.log('Employee added successfully:', response);
        this.fetchEmployees();
        this.resetForm();
      },
      error => {
        console.error('Error adding employee:', error);
      }
    );
  }

  updateBonus(): void {
    if (this.editEmployee) {
      this.bonusService.updateBonus(this.editEmployee.id, this.editEmployee).subscribe(
        response => {
          console.log('Employee updated successfully:', response);
          this.fetchEmployees();
          this.cancelEdit();
        },
        error => {
          console.error('Error updating employee:', error);
        }
      );
    }
  }

  deleteBonus(id: number): void {
    this.bonusService.deleteBonus(id).subscribe(
      response => {
        console.log('Employee deleted successfully:', response);
        this.fetchEmployees();
      },
      error => {
        console.error('Error deleting employee:', error);
      }
    );
  }

  edit(employee: any): void {
    this.editEmployee = { ...employee }; // Copy the employee object
    this.currentEmployee = this.editEmployee; // Set form to edit mode
  }

  cancelEdit(): void {
    this.editEmployee = null;
    this.currentEmployee = this.newEmployee; // Reset form to add mode
  }

  resetForm(): void {
    this.newEmployee = {
      name: '',
      designation: '',
      installmentAmount: null,
      totalInstallments: null,
      installmentPeriod: ''
    };
    this.currentEmployee = this.newEmployee; // Reset form reference
  }
}



