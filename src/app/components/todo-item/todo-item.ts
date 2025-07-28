import { Component, EventEmitter, input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
/** Assets */
import { iTodo } from '@/assets/services/todos';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo = input.required<iTodo>();
  editing = signal(false);
  _title = signal('');

  @Output() updated = new EventEmitter<iTodo>();
  /** LifeCycle */
  ngOnChanges(): void {
    this._title.set(this.todo().title);
  }
  /** Methods */
  toggleEditing = () => this.editing.update((bool) => !bool);
  removeTodo = () => this.updated.emit({ ...this.todo(), hidden: true });
  updateTodo = (type?: string) => {
    this.editing.set(false);
    if (type === 'cancel') {
      this._title.set(this.todo().title);
    } else if (type === 'edit') {
      this.updated.emit({ ...this.todo(), title: this._title() });
    } else {
      this.updated.emit({ ...this.todo(), completed: !this.todo().completed });
    }
  };
}
