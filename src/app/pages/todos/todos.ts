import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
/** Assets */
import { TodoItem } from '@/components/todo-item/todo-item';
import { iTodo, TodosService } from '@/assets/services/todos';
import { FilterTodosPipe } from '@/assets/pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  busy = signal(false);
  searchText = signal('');
  todoItems = signal<iTodo[]>([]);
  todoService = inject(TodosService);

  updateTodoItem(item: iTodo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => (todo.id === item.id ? item : todo));
    });
  }

  ngOnInit(): void {
    this.busy.set(true);
    this.todoService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.log(err);
          return [];
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      })
      .add(() => this.busy.set(false));
  }
}
