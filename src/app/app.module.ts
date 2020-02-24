import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaRowComponent } from './components/pizza-overview/pizza-row/pizza-row.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PizzaOverviewComponent } from './components/pizza-overview/pizza-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaRowComponent,
    HeaderComponent,
    FooterComponent,
    PizzaOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
