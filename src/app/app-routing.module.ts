import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxOfficeComponent } from './box-office/box-office.component';

const routes: Routes = [
    { path: 'box-office', component: BoxOfficeComponent },
    { path: '', redirectTo: 'box-office', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
