import { Injectable } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { MovieDetailsModalComponent } from '../movie-details-modal/movie-details-modal.component';

export interface MovieDetails {
  name: string;
  caption: string;
  thumbnailimageSrc: string;
  OverlayimageSrc: string;
  desc: string;
  rating: number;
  popularity: number;
  runTime: string;
  budget: number;
  language: string;
  releaseDate: Date;
  crew: CrewDetails;
  cast: CastDetails;
  [key: string]: any;
}

export interface CrewDetails {
  editedBy: string;
  country: string;
  productionCompany: string;
  distribytedBy: string
}

export interface CastDetails {
  actor1: string;
  actor2: string;
  actor3: string
}

export namespace enums {
  export enum enum_searchby {
    none = 0,
    name = 0,
    rating,
    popularity,
    runTime,
    budget,
    language,
    releaseDate,
    crew,
    cast,
  }
}


@Injectable({
  providedIn: 'root'
})
export class BoxOfficeService {

  constructor(private _dialog: DialogService) { }

  openMovieDetails(movieDetails: MovieDetails) {
    return this._dialog.addDialog(MovieDetailsModalComponent, { movie: movieDetails }, { closeByClickingOutside: true });
  }

  getMovies(): MovieDetails[] {
    return [
      {
        name: 'Happy Potter',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/harry-potter-timg.jpg',
        OverlayimageSrc: 'assets/harry-potter-oimg.jpg',
        desc: 'It is the sequel to Harry Potter and the Half-Blood Prince and is followed by the concluding entry, Harry Potter and the Deathly Hallows – Part 2. The story follows Harry Potter, who has been tasked by Dumbledore with finding and destroying Lord Voldemort\'s secret to immortality – the Horcruxes',
        rating: 4,
        popularity: 16685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('10/2/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'leonardo dicaprio',
          actor2: 'Margot Robbie',
          actor3: 'Quentin Tarantino'
        }
      },
      {
        name: 'Once Upon A Time In Hollywood',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/once-upon-a-time -in-hollywood-timg.jpg',
        OverlayimageSrc: 'assets/once-upon-a-time-in-hollywood-oimg.jpg',
        desc: 'Quentin Tarantino’s Once Upon a Time… in Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood’s golden age.',
        rating: 3,
        popularity: 15685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('8/23/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'Brad Pitt',
          actor2: 'Luke Perry',
          actor3: 'Margot Robbie'
        }
      },
      {
        name: 'Spider-Man: Far From Home',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/Spider-Man-Far-From-Home-timg.jpg',
        OverlayimageSrc: 'assets/spyder-man-far-from-home-oimg.jpg',
        desc: 'Peter Parker\'s relaxing European vacation takes an unexpected turn when Nick Fury suddenly shows up in his hotel room.Parker soon finds himself donning the Spider - Man...',
        rating: 2,
        popularity: 14685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('8/1/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'Tom Holland',
          actor2: 'Samuel L. Jackson',
          actor3: 'Zendaya'
        }
      },
      {
        name: 'The Lion King',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/the-lion-king-timg.jpg',
        OverlayimageSrc: 'assets/the-lion-king-oimg.jpg',
        desc: 'Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny on the plains of Africa. But not everyone in the kingdom celebrates the new cub\'s...',
        rating: 5,
        popularity: 13685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('7/2/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'Amy Sedaris',
          actor2: 'Donald Glover',
          actor3: 'Seth Rogen'
        }
      },
      {
        name: 'The Farewell',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/the-fare-well-timg.jpg',
        OverlayimageSrc: 'assets/the-fare-well-oimg.jpg',
        desc: 'Billi\'s family returns to China under the guise of a fake wedding to stealthily say goodbye to their beloved matriarch-- the only person that doesn\'t know she only has...',
        rating: 4,
        popularity: 15685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('12/2/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'Awkwafina',
          actor2: 'Tzi Ma',
          actor3: 'Diana Lin'
        }
      },
      {
        name: 'The Art of Racing in the Rain',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/harry-potter-timg.jpg',
        OverlayimageSrc: 'assets/harry-potter-oimg.jpg',
        desc: 'Denny Swift is a Formula One race car driver who understands that the techniques needed on the racetrack can also be used to successfully navigate everyday life. Besides...',
        rating: 5,
        popularity: 14685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('6/2/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'Milo Ventimiglia',
          actor2: 'Amanda Seyfried',
          actor3: 'Kathy Baker'
        }
      },
      {
        name: 'Brian Banks',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/brian-banks-timg.jpg',
        OverlayimageSrc: 'assets/brian-banks-oimg.jpg',
        desc: 'The inspirational true story of Brian Banks, an all-American high school football star who finds his life upended when he\'s wrongly convicted of a crime he didn\'t...',
        rating: 5,
        runTime: '120 min',
        budget: 63000000,
        popularity: 17685,
        language: 'english',
        releaseDate: new Date('4/2/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'leonardo dicaprio',
          actor2: 'Margot Robbie',
          actor3: 'Quentin Tarantino'
        }
      },
      {
        name: 'Ready or Not',
        caption: 'Deathly Hollows',
        thumbnailimageSrc: 'assets/ready-or-not-timg.jpg',
        OverlayimageSrc: 'assets/ready-or-not-oimg.jpg',
        desc: 'Grace couldn\'t be happier after she marries the man of her dreams at his family\s luxurious estate. There\'s just one catch --she must now hide from midnight until dawn...',
        rating: 4,
        popularity: 17685,
        runTime: '120 min',
        budget: 63000000,
        language: 'english',
        releaseDate: new Date('8/2/2019'),
        crew: {
          editedBy: 'Mark Day',
          country: 'United Kingdom; United States',
          productionCompany: 'Warner Bros. UK Services ...',
          distribytedBy: 'Warner Bros. Pictures'
        },
        cast: {
          actor1: 'leonardo dicaprio',
          actor2: 'Margot Robbie',
          actor3: 'Quentin Tarantino'
        }
      }
    ]
  }
}
