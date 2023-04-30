import { Component ,OnInit} from '@angular/core';
import { MovieModel } from './movie/movie.model';
import { MoviesRepository } from './movies.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  title="MovieList";
  movies:MovieModel[] ;
  moviesRepository:MoviesRepository ;
  popularMovies:MovieModel[] ;
  filterText:string ="";
  constructor() {
    this.moviesRepository = new MoviesRepository();
    this.movies = this.moviesRepository.getMovies();
    this.popularMovies = this.moviesRepository.getPupularMovies();
  }

  ngOnInit() {}

}