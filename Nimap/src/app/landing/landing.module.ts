import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [
    HomeComponent,
    UserRegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
     MatSelectModule,
     MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
   
    MatFormFieldModule,
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatChipsModule,
    MatSliderModule
   
  ]
})
export class LandingModule { }
