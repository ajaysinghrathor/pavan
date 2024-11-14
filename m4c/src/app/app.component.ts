import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { InstructionsComponent } from "./instructions/instructions.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { M4cComponent } from './m4c/m4c.component';
import { CustomerComponent } from './customer/customer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
//import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      MatTableModule,
      RouterModule,
      CommonModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      ReactiveFormsModule,
      AppComponent,
      ProfileComponent,
      RegisterComponent,
      M4cComponent,
      DashboardComponent,
      CustomerComponent,
      LoginComponent,
      InstructionsComponent,
      HomeComponent,
      HttpClientModule,
], //      //AppModule,      PagenotfoundComponent,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'm4capp';
}
