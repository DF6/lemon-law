import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.scss']
})
export class ConversationHeaderComponent implements OnInit {

  @Input() countdown: Date;
  public countdownFormatted: string = '00:00:00';
  public timer;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.timer = setInterval(this.formatDate, 1000);
  }

  applyLemonLaw() {}

  formatDate() {
    let distance = this.countdown.getTime() - new Date().getTime();

    if (distance < 0) {
      clearInterval(this.timer);
      return;
    }

    this.countdownFormatted = this.appService.addZero(Math.floor((distance % 1000*60*60*24) / 1000*60*60));
    this.countdownFormatted += ':' + this.appService.addZero(Math.floor((distance % 1000*60*60) / 1000*60));
    this.countdownFormatted += ':' + this.appService.addZero(Math.floor((distance % 1000*60) / 1000));
  }

  goBack() {}

  showHelpTooltip() {}

}
