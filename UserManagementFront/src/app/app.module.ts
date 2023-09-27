import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from '../components/card/card.component';
import { CardListComponent } from 'src/components/card-list/card-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatDatepickerModule } from '@angular/material/datepicker'; // Import MatDatepickerModule
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from '../components/user-form/user-form.component'; 
import { UserManagementPage } from './pages/user-management-page/user-management-page.component';
import { SummaryCardComponent } from '../components/summary-card/summary-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent, 
    CardListComponent,
    UserFormComponent,
    UserManagementPage,
    SummaryCardComponent
  ], 
  imports: [
    BrowserModule,
    MatCardModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    FormsModule, 
    MatDatepickerModule, 
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule, 
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
