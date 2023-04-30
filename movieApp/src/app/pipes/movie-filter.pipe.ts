import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../movies/movie/movie.model';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies:MovieModel[],filterText:string): MovieModel[]  {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?movies.filter((m:MovieModel)=>
    m.title.toLocaleLowerCase().indexOf(filterText)!==-1 || m.desc.toLocaleLowerCase().indexOf(filterText) != -1):movies;  
  }

}
