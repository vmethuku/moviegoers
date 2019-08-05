import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { BoxOfficeService } from './box-office/box-office.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoxOfficeComponent,
    MovieCardComponent,
    MovieDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [BoxOfficeService],
  entryComponents: [MovieDetailsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
