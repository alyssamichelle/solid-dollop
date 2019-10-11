import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    TicketComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TicketsComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'tickets/:ticketId', component: TicketDetailComponent },
    ])
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
