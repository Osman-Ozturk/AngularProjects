import { Component ,OnInit} from '@angular/core';
import { MovieModel } from './movie/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  constructor() { }

  ngOnInit() {}

  movies:MovieModel[] = [
    {id:1, img:"/assets/img/3.jpeg" ,title:"Film3" ,desc:"Film3 description"},
    { id:2,img:"/assets/img/1.jpeg" ,title:"Film4" ,desc:"Film1 description"},
    { id:3,img:"/assets/img/2.jpeg" ,title:"Film5" ,desc:"Film2 description"},
    { id:4,img:"/assets/img/4.jpeg" ,title:"Film6" ,desc:"Film4 description"},
  ]
}