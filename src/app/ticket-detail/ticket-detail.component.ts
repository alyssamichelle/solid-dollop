import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Ticket, BackendService } from '../backend.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: Ticket;
  @Input() tickets: Ticket[];
  @Output() public toggleCompletedStatus = new EventEmitter();
  users = this.backend.users();
  ticketUserId = new FormControl('');

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.ticket = this.tickets[+params.get('ticketId')];
    });
  }

  constructor(
    private backend: BackendService, 
    fb: FormBuilder, 
    private ticketsService: TicketsService, 
    private backendService: BackendService, // TODO this is a mess
    private route: ActivatedRoute
  ) {
    backendService.tickets().subscribe((data: Ticket[]) => this.tickets = data);
  }

  handleCompleted(ticket: Ticket): void {
    ticket.completed = !ticket.completed;
    this.ticketsService.completeTicket(ticket.id, ticket.completed);
  }

  assignTicket(): void {
    // this will get ticket from a variable in this file
    // this will be passed user from the template
    this.ticketsService.assignUser(this.ticket.id, +this.ticketUserId);
  }

}