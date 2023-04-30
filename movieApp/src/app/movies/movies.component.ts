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
  filterMovies:MovieModel[] ;
  moviesRepository:MoviesRepository ;
  popularMovies:MovieModel[] ;
  filterText:string ="";
  constructor() {
    this.moviesRepository = new MoviesRepository();
    this.movies = this.moviesRepository.getMovies();
    this.filterMovies = this.movies;
    this.popularMovies = this.moviesRepository.getPupularMovies();
  }

  ngOnInit() {}
  
  onInputChange(){
    this.filterMovies= this.filterText? this.movies.filter((movie)=>
                        movie.title.toLowerCase()
                        .indexOf(this.filterText.toLowerCase())!==-1 
                        || movie.desc.toLowerCase().indexOf(this.filterText.toLowerCase())!==-1)
                        :this.movies;
  }
  AddList($event:any,movie:MovieModel){
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      $event.target.innerText = "Remove from List";
      
    }else{
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      $event.target.innerText = "Add to List";
  }}
}