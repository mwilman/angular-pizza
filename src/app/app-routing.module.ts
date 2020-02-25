import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaOverviewComponent} from './components/pizza-overview/pizza-overview.component';
import {PastaOverviewComponent} from './components/pasta-overview/pasta-overview.component';
import {ImprintComponent} from './core/imprint/imprint.component';
import {ContactComponent} from './core/contact/contact.component';


const routes: Routes = [
  {path: 'pizza', component: PizzaOverviewComponent, pathMatch: 'full'},
  {path: 'pasta', component: PastaOverviewComponent, pathMatch: 'full'},
  {path: 'imprint', component: ImprintComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
