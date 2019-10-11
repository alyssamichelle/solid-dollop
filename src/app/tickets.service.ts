import { BackendService, Ticket } from './backend.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  asyncTickets = new Subject<Ticket[]>();

  constructor(private backend: BackendService) { }

  // get tickets
  getTickets() {
    return this.backend.tickets()
      .subscribe(data => {
        this.asyncTickets.next(data);
      });
  }

  // create ticket
  createTicket(description: string) {
    console.log('create ticket was ran');

    this.backend.newTicket({description: description})
      .subscribe(data => {
        this.getTickets();
      });
  }

  // complete ticket
  completeTicket(ticketId: number, completed: boolean) {
    this.backend.complete(ticketId, completed)
      .subscribe(data => {
        this.getTickets()
      });
  }

  // assign a user to the ticket
  assignUser(ticketId: number, userId: number) {
    this.backend.assign(ticketId, userId)
      .subscribe( data => {
        // update our tickets list
        this.getTickets()
      });
  }

}
