import { HttpClient } from '@angular/common/http';
import { of, retry } from 'rxjs';
import { TasksService } from '../../Connection/tasks.service';
import { TaskModel } from '../../Models/task.model';
import { User } from '../../Models/user.model';
import { UserStoreService } from '../../Services/user-store.service';
import { MyTasksComponent } from './my.tasks.component';
import { Router } from '@angular/router';

describe('MyTaskComponents', () => {
  let component: MyTasksComponent;
  let taskService: TasksService;
  let userStore: UserStoreService;
  let router;
  beforeEach(() => {
    const http = jasmine.createSpyObj<HttpClient>({ get: of({}) });
    taskService = new TasksService(http);
    userStore = new UserStoreService();
    router = jasmine.createSpyObj<Router>({
      navigate: new Promise(() => true),
    });
    component = new MyTasksComponent(taskService, userStore, router);
  });

  const taskResponse = {
    tasks: [new TaskModel(), new TaskModel(), new TaskModel()],
    count: 2,
  };

  it('should load data from TaskService', () => {
    component.tasks = [];

    spyOn(taskService, 'getTasksByUserEmail').and.callFake(() =>
      of(taskResponse)
    );
    component.loadTasks();
    expect(component.tasks).toEqual(taskResponse.tasks);
  });

  it('should load data after calling ngAfterViewInit', () => {
    component.tasks = [];
    spyOn(taskService, 'getTasksByUserEmail').and.callFake(() =>
      of(taskResponse)
    );
    component.ngAfterViewInit();

    expect(component.tasks).toEqual(taskResponse.tasks);
  });

  it('should load data after calling ngAfterViewInit', () => {
    component.tasks = [];
    spyOn(taskService, 'getTasksByUserEmail').and.callFake(() =>
      of(taskResponse)
    );
    component.ngAfterViewInit();
    expect(component.tasks).toEqual(taskResponse.tasks);
  });

  it('should get email from authorized user for loading user`s tasks', () => {
    let email = 'test-email';
    userStore.authUser = new User();
    userStore.authUser.email = email;

    let testEmail: string = '';

    spyOn(taskService, 'getTasksByUserEmail').and.callFake((userEmail) => {
      testEmail = userEmail;
      return of(taskResponse);
    });
    component.loadTasks();
    expect(userStore.authUser.email).toEqual(testEmail);
  });
});
