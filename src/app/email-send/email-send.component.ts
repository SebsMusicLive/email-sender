import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [],
  declarations: [SendEmailComponent],
  exports: [SendEmailComponent]
})
export class SendEmailComponent {
  email = '';
  subject = '';
  message = '';

  constructor(private http: HttpClient) {}

  sendEmail() {
    const emailData = {
      to: this.email,
      subject: this.subject,
      text: this.message,
      html: `<p>${this.message}</p>`,
    };

    this.http.post('http://localhost:4200/email-send', emailData).subscribe(
      (response) => {
        console.log('Correo enviado', response);
        alert('Correo enviado correctamente');
      },
      (error) => {
        console.error('Error al enviar el correo', error);
        alert('Hubo un error al enviar el correo');
      }
    );
  }  
}
