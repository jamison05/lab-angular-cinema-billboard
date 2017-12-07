import { Injectable } from '@angular/core';
import { movieArray } from 'sample-movies';
@Injectable()
export class MovieServiceService {
  listOfMovies: any[] = movieArray;
  constructor() { }
  getMovies(){
    return this.listOfMovies;
  }

const array_move:any[] = [
  id: number,
  title: string,
  poster: string,
  synopsis: string,
  genres:string[],
  year: number,
  director: string[],
  actors: string[],
  hours: string[],
  room:number,
]
  getMoviesId(movieId: number){

    let movie_output;



    this.listOfMovies.forEach((oneMovie, index) => {
        if (oneMovie.id === movieId) {
            movie_output = oneMovie;
        }
      });

      return movie_output;
  }
}
