import { Ticket } from './../backend.service';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() ticket: Ticket;
  @Output() completed = new EventEmitter<void>();
  constructor() { }

  completeTicket() {
    this.completed.emit();
  }
}
