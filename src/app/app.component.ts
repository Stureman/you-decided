import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bestäm du!';
  todoArray=[];
  choosenOne = null;
  show = false;

  AddToList(todo) {    
    if(todo.value !== ''){
      this.todoArray.push(todo);   
    }        
  }

  DeleteItem(todo:any){      
    const index: number = this.todoArray.indexOf(todo);     
    if(index !== -1){
      this.todoArray.splice(index, 1);
    }    
  }

  Choose() {
    var item = this.todoArray[Math.floor(Math.random() * this.todoArray.length)];
    this.choosenOne = item;
    this.show = true;
  }
}