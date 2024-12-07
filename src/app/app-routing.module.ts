import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { AdjustedTableComponent } from './adjusted-table/adjusted-table.component';

const routes: Routes = [
  { path: 'employee-table', component: EmployeeTableComponent},
  { path: 'adjusted-table', component: AdjustedTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
