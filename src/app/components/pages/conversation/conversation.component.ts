import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goBack(): void {
    this.router.navigateByUrl('');
  }

}
