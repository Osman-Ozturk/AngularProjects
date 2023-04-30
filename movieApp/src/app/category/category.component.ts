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
  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories(); 
  }
  ngOnInit() {}
}
