import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ContactService} from '../services/contact.service';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf
  ],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {

    this.userForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('User Data:', this.userForm.value);
      const contactData = {
        properties: {
          firstname: this.userForm.value.firstname,
          lastname: this.userForm.value.lastname,
          email: this.userForm.value.email,
        },
      };

      this.contactService.createContact(contactData).subscribe(
        (response) => {
          console.log('Contact created successfully:', response);
          alert('Contact created successfully!' + JSON.stringify(response));
          this.userForm.reset();
        },
        (error) => {
          console.error('Error creating contact:', error);
          alert('Failed to create contact. Please try again.');
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
