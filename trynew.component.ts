import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-trynew',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './trynew.component.html',
  styleUrl: './trynew.component.scss'
})
export class TrynewComponent {


  invoiceForm: FormGroup;
  currentStep: number = 1; // Track the current step (1 for Invoice Details, 2 for Reference Details)

  constructor(private fb: FormBuilder) {
    // Initialize the form with some default values
    this.invoiceForm = this.fb.group({
      invoiceNumber: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]],
      invoiceDate: ['', Validators.required],
      paymentDueDate: ['', Validators.required],
      referenceNumber: ['', [Validators.pattern('^[0-9]+$')]],
      referenceDate: ['']
    });
  }


  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goForward(): void {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      // Submit the form data to the server or handle the form submission
      console.log('Form submitted successfully!', this.invoiceForm.value);
    }
  }






}
