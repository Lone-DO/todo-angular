import { Pipe, PipeTransform } from '@angular/core';
import { iTodo } from '@/services/todos';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(value: iTodo[], searchText: string): iTodo[] {
    if (!searchText) return value;
    return value.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
  }
}
