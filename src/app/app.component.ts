import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Brincar com Leo', false));
    this.todos.push(new Todo(2, 'Brincar com a Antonela', false));
    this.todos.push(new Todo(3, 'Brincar com os dois', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index != -1){
      this.todos.splice(index, 1);
    }
  }

  taskDone(todo: Todo) {
    todo.done = true;
  }

  taskUnDone(todo: Todo) {
    todo.done = false;
  }
}
