import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SendEmailComponent} from './email-send/email-send.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SendEmailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'email-send';
}
