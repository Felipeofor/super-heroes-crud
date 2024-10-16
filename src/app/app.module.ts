import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
// Angular Material
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CreateHeroDialogComponent } from './components/create-hero-dialog/create-hero-dialog.component';
import { UppercaseDirective } from './uppercase.directive';
import { CapitalizeFirstLetterDirective } from './capitalize-first-letter.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    SignUpComponent,
    HomeComponent,
    DialogErrorComponent,
    HeroesTableComponent,
    ConfirmDialogComponent,
    CreateHeroDialogComponent,
    UppercaseDirective,
    CapitalizeFirstLetterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
