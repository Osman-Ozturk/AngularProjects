import { Component ,OnInit} from '@angular/core';
import { Category } from './category.model';
import { CategoryRepository } from './categoryRepository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories:Category[] ;
  categoryRepository:CategoryRepository ;
  selectedCategory :Category | null= null;
  displayAll:boolean = true;
  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories(); 
    
  }
  ngOnInit() {}
  selectCategory(category?:Category){
    if(category){
      this.selectedCategory = category;
      this.displayAll = false;
    }else{
      this.selectedCategory = null;
      this.displayAll = true;}
  }

}
