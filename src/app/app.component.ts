import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailSendComponent} from './email-send/email-send.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailSendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'email-send';
}
