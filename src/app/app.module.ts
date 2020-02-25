import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PizzaOverviewComponent } from './components/pizza-overview/pizza-overview.component';
import { PastaOverviewComponent } from './components/pasta-overview/pasta-overview.component';
import {ItemRowComponent} from './components/item-row/item-row.component';
import { ImprintComponent } from './core/imprint/imprint.component';
import { ContactComponent } from './core/contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SnacksOverviewComponent } from './components/snacks/snacks-overview.component';
import { SchnitzelOverviewComponent } from './components/schnitzel-overview/schnitzel-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemRowComponent,
    HeaderComponent,
    FooterComponent,
    PizzaOverviewComponent,
    PastaOverviewComponent,
    ImprintComponent,
    ContactComponent,
    SnacksOverviewComponent,
    SchnitzelOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
