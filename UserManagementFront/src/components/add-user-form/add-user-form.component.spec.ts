import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-user-form',
  templateUrl: './add-user-form.component.html',
})
export class AddUserFormComponent {
  formData: FormData = {
    subject: '',
    user: '',
    deadline: null,
    isCompleted: false
  };

  submitForm(form: NgForm): void {
    if (form.valid) {
      // Handle form submission here (e.g., send data to a service)
      console.log('Form submitted with data:', this.formData);
    }
  }
}

interface FormData {
  subject: string;
  user: string;
  deadline: Date | null;
  isCompleted: boolean;
}
