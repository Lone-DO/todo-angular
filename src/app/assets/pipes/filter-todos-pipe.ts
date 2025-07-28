import { Pipe, PipeTransform } from '@angular/core';
/** Assets */
import { iTodo } from '@/assets/services/todos';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(value: iTodo[], searchText: string): iTodo[] {
    return value.filter((item) => {
      if (!searchText) return !item.hidden;
      return (
        !item.hidden &&
        item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
      );
    });
  }
}
