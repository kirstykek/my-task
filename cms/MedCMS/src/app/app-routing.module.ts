import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddAppointmentComponent} from './add-appointment/add-appointment.component';
import {MedicationReminderComponent} from './medication-reminder/medication-reminder.component';
import{ NextOfKinComponent} from './next-of-kin/next-of-kin.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {LoginComponent} from './login/login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ProfileComponent} from './profile/profile.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';

import { from } from 'rxjs';
const routes: Routes = [
  {path:'about-us',component:AboutUsComponent},
  {path:'add-appointment', component:AddAppointmentComponent},
  {path:'medication-reminder',component:MedicationReminderComponent},
  {path:'next-of-kin',component:NextOfKinComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'login',component:LoginComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'terms-and-conditions',component:TermsAndConditionsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
