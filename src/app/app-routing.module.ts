import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaOverviewComponent} from './components/pizza-overview/pizza-overview.component';


const routes: Routes = [
  {path: 'pizza', component: PizzaOverviewComponent, pathMatch: 'full'},
  {path: 'pasta', component: PastaComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
