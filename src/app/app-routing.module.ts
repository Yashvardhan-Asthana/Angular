import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusScreenComponent } from './Components/bonus-component/bonus-screen/bonus-screen.component';
// import { AdjustedTableComponent } from './adjusted-table/adjusted-table.component';

const routes: Routes = [
  { path: 'bonus', component: BonusScreenComponent },
  // { path: 'adjust', component: AdjustedTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
