import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ScrollDispatchModule, ScrollingModule, ScrollDispatcher } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ScrollDispatchModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ScrollDispatcher],

  bootstrap: [AppComponent]
})
export class AppModule { }
