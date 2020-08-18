import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'conversation-header',
  templateUrl: './conversation-header.component.html',
  styleUrls: ['./conversation-header.component.scss']
})
export class ConversationHeaderComponent implements OnInit {

  @Output() goBackEvent = new EventEmitter();

  public countdownFormatted: string;
  public timer;
  public countdown;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.countdown = new Date('2020-08-17 03:24:00');
    this.timer = setInterval(() => {
      let distance = this.countdown.getTime() - new Date().getTime();

      if (distance < 0) {
        clearInterval(this.timer);
        return;
      }
  
      var ms = distance % 1000;
      distance = (distance - ms) / 1000;
      this.countdownFormatted = this.appService.addZero(distance % 60);
      distance = (distance - distance % 60) / 60;
      this.countdownFormatted = this.appService.addZero(distance % 60) + ':' + this.countdownFormatted;
      this.countdownFormatted = this.appService.addZero((distance - distance % 60) / 60) + ':' + this.countdownFormatted;
    }, 1000);
  }

  public applyLemonLaw() {

  }

  public goBack() {
    this.goBackEvent.emit();
  }

  public showHelpTooltip() {

  }

}
