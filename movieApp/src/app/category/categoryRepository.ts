import { Category } from "./category.model";

export class CategoryRepository {
    private categories: Category[] = [];
    constructor() {
        this.categories = [
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
        ]};
        getCategories(): Category[] {
            return this.categories;
        }
        getCategoryById(id: number): Category | undefined{
                return this.categories.find(i => i.id == id);
        }
}