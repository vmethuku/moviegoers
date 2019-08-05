import { Component, OnInit, Input } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { MovieDetails } from '../box-office/box-office.service';

interface DataModel {
  movie: MovieDetails
}

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent extends DialogComponent<DataModel, boolean> implements OnInit {

  @Input() movie: MovieDetails;

  rating: number[];

  constructor(_dialog: DialogService) {
    super(_dialog);
  }

  ngOnInit() {
    this.rating = Array(this.movie.rating).fill(1);
  }

}
