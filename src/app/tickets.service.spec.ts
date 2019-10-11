import { BackendService } from './backend.service';
import { TestBed } from '@angular/core/testing';

import { TicketsService } from './tickets.service';

fdescribe('TicketsService', () => {
  let backendService: BackendService;
  let ticketsService: TicketsService;

  beforeEach(() => {
    // This works, but I assume they want you to use that TestBed thing imported above.
    backendService = new BackendService();
    ticketsService = new TicketsService(backendService);

    // This doesn't work because of a provider error. Can't make a TicketService wihout passing it the backend service. This provider thing is also why all your other tests are failing, too.
    // Snippet pulled straight from https://scotch.io/tutorials/testing-angular-with-jasmine-and-karma-part-1#toc-testing-an-angular-service.

    // TestBed.configureTestingModule({
    //   providers: [TicketsService]
    // });

    // ticketsService = TestBed.get(TicketsService);
  });

  it('should be created', () => {
    expect(ticketsService).toBeTruthy();
  });

  // TicketsService.getTickets should return all tickets
  describe('getTickets', () => {
    let backendService: BackendService;
    let ticketsService: TicketsService;

    beforeEach(() => {
      backendService = new BackendService();
      ticketsService = new TicketsService(backendService);
    });

    it('should return all tickets', () => {
      expect(ticketsService.getTickets()).toBe('Expected<Subscription<Ticket[]>>');
    });
  });
  // TicketsService.createTicket should add a new ticket to tickets list
});
