import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-send',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css'],
}) 
export class EmailSendComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      destino: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      cc: ['', Validators.email],
      mensaje: ['', Validators.required],
    });
  }

  enviarCorreo() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      console.log('JSON generado:', JSON.stringify(emailData, null, 2));
      // Aquí puedes enviar `emailData` al backend con HTTP
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
