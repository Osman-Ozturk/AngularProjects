import { Component } from '@angular/core';
import { TodoModel } from './todo.model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  constructor(){
    this.items = JSON.parse(localStorage.getItem("todos")||"[]")
  }
  displayAll:boolean = true;
  inputText:string = "";
  private name:string = "Osman"
  getName():string{
    return this.name;
  }
  private items:TodoModel[] =localStorage.getItem("todos)")==null?[]:JSON.parse(localStorage.getItem("todos")||"[]")
  addItem(){
    if (this.inputText !== "") {
      let data ={id:this.items.length+1,description: this.inputText, done: false}
      this.items.push(data)
      localStorage.setItem("todos",JSON.stringify([...this.items,data]))
      this.inputText = ""
      
    }else{
      alert("Please enter a description")
    }
  }
  getItems():TodoModel[]{
    if (this.displayAll) {
      console.log(this.items);
      
      return this.items
      }else{
        return this.items.filter(item => !item.done)
      }
    }

    onDoneChange(item:TodoModel){
      let items:TodoModel[]  = localStorage.getItem("todos") == null?[]:JSON.parse(localStorage.getItem("todos")||"[]")
      items?.forEach(i => {
        if (i.description == item.description) {
          i.done = !i.done
          
        }
      });
      localStorage.setItem("todos",JSON.stringify(items))
    } 
}
