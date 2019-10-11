import { TicketsService } from './../tickets.service';
import { Component } from '@angular/core';
import { BackendService, Ticket } from '../backend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
  tickets = this.backend.tickets();
  users = this.backend.users();

  newTicketDetails: FormGroup;

  constructor(private backend: BackendService, fb: FormBuilder, private ticketsService: TicketsService) {
    this.newTicketDetails = fb.group({
      ticketDescription: ['', Validators.required],
      ticketAssigneeId: ['', Validators.required],
      ticketCompleted: ['', Validators.required],
    });
  }

  saveNewTicket(): void {
    this.ticketsService.createTicket(this.newTicketDetails.value.ticketDescription);
  }

  handleCompleted(ticket: Ticket): void {
    ticket.completed = !ticket.completed;
    this.ticketsService.completeTicket(ticket.id, ticket.completed);
  }
}
