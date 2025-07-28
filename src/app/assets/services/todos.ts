import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface iTodo {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<iTodo[]>(url);
  }
}
