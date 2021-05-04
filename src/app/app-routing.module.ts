import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PizzaOverviewComponent} from './components/pizza-overview/pizza-overview.component';
import {PastaOverviewComponent} from './components/pasta-overview/pasta-overview.component';
import {ImprintComponent} from './core/imprint/imprint.component';
import {ContactComponent} from './core/contact/contact.component';
import {SnacksOverviewComponent} from './components/snacks/snacks-overview.component';
import {SchnitzelOverviewComponent} from './components/schnitzel-overview/schnitzel-overview.component';
import {CartComponent} from './components/cart/cart.component';
import {AllOverviewComponent} from './components/all-overview/all-overview.component';


const routes: Routes = [
  {path: 'pizza', component: PizzaOverviewComponent},
  {path: 'pasta', component: PastaOverviewComponent},
  {path: 'schnitzel', component: SchnitzelOverviewComponent},
  {path: 'snacks', component: SnacksOverviewComponent},
  {path: 'all', component: AllOverviewComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: 'pizza', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
