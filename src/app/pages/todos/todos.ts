import { Component, inject, signal } from '@angular/core';
import { iTodo, TodosService } from '@/services/todos';
import { catchError } from 'rxjs';
import { TodoItem } from '@/components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '@/pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  searchText = signal('');
  todoItems = signal<iTodo[]>([]);
  todoService = inject(TodosService);

  updateTodoItem(item: iTodo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => (todo.id === item.id ? item : todo));
    });
  }

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
