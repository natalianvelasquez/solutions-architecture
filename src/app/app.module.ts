import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    MatFormField,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    ListContactsComponent,
    MatFormFieldModule,
    MatInputModule,
    CreateContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
