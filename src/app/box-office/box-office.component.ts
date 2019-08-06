import { Component, OnInit } from '@angular/core';
import { BoxOfficeService, MovieDetails, enums } from './box-office.service';

@Component({
  selector: 'app-box-office',
  templateUrl: './box-office.component.html',
  styleUrls: ['./box-office.component.scss']
})
export class BoxOfficeComponent implements OnInit {

  movies: MovieDetails[];
  enum_searchby = enums.enum_searchby;

  searchBy: enums.enum_searchby = enums.enum_searchby.none;
  sortBy: enums.enum_searchby = enums.enum_searchby.none;
  filterValue: string;

  constructor(private _box: BoxOfficeService) { }

  ngOnInit() {
    this.movies = this._box.getMovies();
  }

  onEnter(event) {
    if (event.which === 13) {
      this.onSearch();
    }
  }

  onSort() {
    const sortCategory = this.enum_searchby[this.sortBy];
    this.movies = this.movies.sort((movie1, movie2) => {
      if (typeof movie1[sortCategory] === 'object') {
        return new Date(movie1[sortCategory]).getTime() - new Date(movie2[sortCategory]).getTime();
      } else {
        return movie1[sortCategory] - movie2[sortCategory];
      }

    });

  }


  onSearch() {
    this.movies = [];
    const searchedCategory = this.enum_searchby[this.searchBy];
    const filtervalue = this.filterValue;
    if (!filtervalue) {
      this.movies = this._box.getMovies();
      return;
    }
    for (let movie of this._box.getMovies()) {
      if (typeof movie[searchedCategory] === 'object' && JSON.stringify(movie[searchedCategory]).toLowerCase().includes(this.filterValue.toLowerCase())) {
        this.movies.push(movie);
      } else if (typeof movie[searchedCategory] === 'number' && movie[searchedCategory] === parseInt(this.filterValue)) {
        this.movies.push(movie);
      } else if (typeof movie[searchedCategory] === 'string' && movie[searchedCategory].toLowerCase().includes(this.filterValue.toLowerCase())) {
        this.movies.push(movie);
      }
    }

  }
}
