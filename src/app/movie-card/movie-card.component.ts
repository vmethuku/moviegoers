import { Component, OnInit, Input } from '@angular/core';
import { MovieDetails, BoxOfficeService } from '../box-office/box-office.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: MovieDetails;

  constructor(private _box: BoxOfficeService) { }

  ngOnInit() {
  }

  onSeeDetails() {
    this._box.openMovieDetails(this.movie)
  }

}
