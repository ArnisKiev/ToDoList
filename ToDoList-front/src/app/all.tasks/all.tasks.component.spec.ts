import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY, of } from 'rxjs';
import { TasksService } from '../Connection/tasks.service';
import { TaskModel } from '../Models/task.model';

import { AllTasksComponent } from './all.tasks.component';

describe('AllTasksComponent', () => {
  let component: AllTasksComponent;
  let taskServices: TasksService;

  beforeEach(() => {
    const http = jasmine.createSpyObj<HttpClient>({
      post: of({}),
      get: of({}),
    });
    taskServices = new TasksService(http);

    component = new AllTasksComponent(taskServices);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadTasks in ngOnOinit', () => {
    const spy = spyOn(component, 'loadTasks').and.callFake(() =>
      of({ tasks: [new TaskModel(), new TaskModel()], count: 8 })
    );
    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should load tasks after calling ngOnInit', () => {
    spyOn(component, 'loadTasks').and.callFake(
      () => (component.tasks = [new TaskModel(), new TaskModel()])
    );

    component.ngOnInit();
    expect(component.tasks.length).toBe(2);
  });
});
