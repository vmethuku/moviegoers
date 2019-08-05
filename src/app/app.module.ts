import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxOfficeComponent,
    MovieCardComponent,
    MovieDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
