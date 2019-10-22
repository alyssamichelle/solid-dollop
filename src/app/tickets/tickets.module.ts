import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'tickets/:ticketId', component: TicketDetailComponent },
    ])
  ]
})
export class TicketsModule { }
