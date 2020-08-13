import { Component } from '@angular/core';
import { ConversationHeaderComponent } from 'src/app/components/conversation-header/conversation-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public countdown;
  title = 'lemon-law';

  constructor() {
    this.countdown = new Date();
  }
}
