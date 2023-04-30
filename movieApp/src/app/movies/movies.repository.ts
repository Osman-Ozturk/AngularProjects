import { MovieModel } from "./movie/movie.model";

export class MoviesRepository {
    private movies: MovieModel[] = [];
    constructor() {
        this.
    movies =[
        { id:1, img:"/assets/img/1.jpeg" ,title:"Film1" ,desc:"Film1 description",isPopular:true},
        { id:2,img:"/assets/img/2.jpeg" ,title:"Film2" ,desc:"Film2 description",isPopular:true},
        { id:3,img:"/assets/img/3.jpeg" ,title:"Film3" ,desc:"Film3 description",isPopular:false},
        { id:4,img:"/assets/img/4.jpeg" ,title:"Film4" ,desc:"Film4 description",isPopular:false},
      ]

    }
    getMovies(): MovieModel[] {
        return this.movies;
    }
    getPupularMovies(): MovieModel[] {
        return this.movies.filter(i => i.isPopular);
    }
    getMovieById(id: number): MovieModel | undefined{
        return this.movies.find(i => i.id == id);
    }
}    