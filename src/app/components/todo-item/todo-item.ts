import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iTodo } from '../../services/todos';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<iTodo>();
}
