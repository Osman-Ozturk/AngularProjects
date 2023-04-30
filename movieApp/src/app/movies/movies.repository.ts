import { MovieModel } from "./movie/movie.model";

export class MoviesRepository {
    private movies: MovieModel[] = [];
    constructor() {
        this.
    movies =[
        { id:1,img:"/assets/img/1.jpeg" ,title:"Film1" ,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod ea aut saepe consequuntur expedita quasi, labore cupiditate dignissimos exercitationem culpa autem voluptatem quis, illum dolores! Necessitatibus molestias possimus dolore?",isPopular:true , datePublished:new Date("2020-01-01")},
        { id:2,img:"/assets/img/2.jpeg" ,title:"Film2" ,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod ea aut saepe consequuntur expedita quasi, labore cupiditate dignissimos exercitationem culpa autem voluptatem quis, illum dolores! Necessitatibus molestias possimus dolore?",isPopular:true,datePublished:new Date("2020-02-02")},
        { id:3,img:"/assets/img/3.jpeg" ,title:"Film3" ,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod ea aut saepe consequuntur expedita quasi, labore cupiditate dignissimos exercitationem culpa autem voluptatem quis, illum dolores! Necessitatibus molestias possimus dolore?",isPopular:false,datePublished:new Date("2020-03-03")},
        { id:4,img:"/assets/img/4.jpeg" ,title:"Film4" ,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod ea aut saepe consequuntur expedita quasi, labore cupiditate dignissimos exercitationem culpa autem voluptatem quis, illum dolores! Necessitatibus molestias possimus dolore?",isPopular:false,datePublished:new Date("2020-04-04")},
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