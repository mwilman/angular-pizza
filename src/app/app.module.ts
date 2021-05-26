import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PizzaOverviewComponent } from './components/pizza-overview/pizza-overview.component';
import { PastaOverviewComponent } from './components/pasta-overview/pasta-overview.component';
import { ImprintComponent } from './core/imprint/imprint.component';
import { ContactComponent } from './core/contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SnacksOverviewComponent } from './components/snacks/snacks-overview.component';
import { SchnitzelOverviewComponent } from './components/schnitzel-overview/schnitzel-overview.component';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { EuroDisplayComponent } from './shared/euro-display/euro-display.component';
import { CartComponent } from './components/cart/cart.component';
import { ButtonComponent } from './shared/button/button.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TextInputComponent } from './shared/text-input/text-input.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MenuCategoryTableComponent } from './components/menu-category-table/menu-category-table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AllOverviewComponent } from './components/all-overview/all-overview.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

registerLocaleData(localeDe);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzaOverviewComponent,
    PastaOverviewComponent,
    ImprintComponent,
    ContactComponent,
    SnacksOverviewComponent,
    SchnitzelOverviewComponent,
    EuroDisplayComponent,
    CartComponent,
    ButtonComponent,
    DropdownComponent,
    TextInputComponent,
    MenuCategoryTableComponent,
    AllOverviewComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
