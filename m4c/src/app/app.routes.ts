import { Routes } from '@angular/router';

import {InstructionsComponent} from './instructions/instructions.component';
import { ProfileComponent } from './profile/profile.component';
import { M4cComponent } from './m4c/m4c.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent,  },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'm4c', component: M4cComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent },
]


