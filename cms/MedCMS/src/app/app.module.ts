import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NextOfKinComponent } from './next-of-kin/next-of-kin.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { MedicationReminderComponent } from './medication-reminder/medication-reminder.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
// import {MatInputModule, MatButtonModule, MatExpansionModule} from '@angular/material';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatCardModule} from '@angular/material/card';
// import {MatIconModule} from '@angular/material/icon';
// import {ReactiveFormsModule,FormsModule} from '@angular/forms';
// import {MatListModule} from '@angular/material/list';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    TermsAndConditionsComponent,
    UserRegistrationComponent,
    NextOfKinComponent,
    AddAppointmentComponent,
    MedicationReminderComponent,
    PrivacyPolicyComponent,
    ProfileComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    // MatInputModule,
    // MatFormFieldModule,
    // MatCardModule,
    // MatIconModule, 
    // ReactiveFormsModule,
    // FormsModule,
    // MatListModule,
    // MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
