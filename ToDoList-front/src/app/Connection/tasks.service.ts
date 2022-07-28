import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../Models/task.model';

export interface TasksResponse {
  tasks: TaskModel[];
  count: number;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url: string = 'http://localhost:3000/api/task';
  constructor(private http: HttpClient) {}

  createTask(task: Omit<Omit<TaskModel, 'author'>, 'id'>) {
    return this.http.post<TaskModel>(this.url, task);
  }

  getTaskByKeuWord(key: string, page: number = 1) {
    const path = this.url + '/searchTaskByKeyWord';

    let params = new HttpParams().append('page', page).append('key', key);
    return this.http.get<TasksResponse>(path, {
      params,
    });
  }

  getTasks(page: number = 1) {
    return this.http.get<TasksResponse>(this.url, {
      params: new HttpParams().set('page', page),
    });
  }

  deleteTask(task: TaskModel) {
    const jwt = localStorage.getItem('jwt');
    return this.http.delete(this.url, {
      body: task,
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }

  updateTask(task: TaskModel) {
    const jwt = localStorage.getItem('jwt');

    return this.http.put(this.url, task, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    });
  }

  getTasksByUserEmail(email: string) {
    let url = this.url + '/userTasks';
    return this.http.get<TasksResponse>(url, {
      params: new HttpParams().set('email', email).set('page', '1'),
    });
  }
}
