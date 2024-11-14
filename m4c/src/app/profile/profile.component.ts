import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.myForm = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
      field5: ['', Validators.required],
      field6: ['', Validators.required],
      field7: ['', Validators.required],
      field8: ['', Validators.required],
      field9: ['', Validators.required],
      field10: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.myForm.valid) {
      this.apiService.saveData(this.myForm.value).subscribe(
        response => {
          console.log('Data saved successfully', response);
        },
        error => {
          console.error('Error saving data', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
