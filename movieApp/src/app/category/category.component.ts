import { Component ,OnInit} from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor() { }
  ngOnInit() {}
  categories:Category[] = [
    {id:1,name:"Adventuer"},
    {id:2,name:"TV Movies"},
    {id:3,name:"Romantik"},
    {id:4,name:"Action"},
    {id:5,name:"Drama"},
    {id:6,name:"Comedy"},
    {id:7,name:"Horror"},
    {id:8,name:"Fantasy"},
    {id:9,name:"Science Fiction"},
    {id:10,name:"Thriller"},
    {id:11,name:"Crime"},
    {id:12,name:"Animation"},
    {id:13,name:"Family"},
    {id:14,name:"History"},
    {id:15,name:"War"},
    {id:16,name:"Music"},
    {id:17,name:"Documentary"},
    {id:18,name:"Western"},
  ]
}
