import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { of } from 'rxjs';
import { TasksService } from 'src/app/Connection/tasks.service';
import { UserStoreService } from 'src/app/Services/user-store.service';
import { CreatingTaskFormComponent } from './creating.task.form.component';

describe('CreatingTaskFormComponent', () => {
  let component: CreatingTaskFormComponent;

  beforeEach(() => {
    const userStore = new UserStoreService();
    const http = jasmine.createSpyObj<HttpClient>({
      post: of({}),
      get: of({}),
    });
    const taskService = new TasksService(http);
    component = new CreatingTaskFormComponent(userStore, taskService);
  });

  it('should form create', () => {
    expect(component.form.contains('title')).toBeTrue();
    expect(component.form.contains('description')).toBeTrue();
    expect(component.form.contains('dueDate')).toBeTrue();
    expect(component.form.contains('priority')).toBeTrue();
  });

  it('should form reset', () => {
    const spy = spyOn(component.form, 'reset');

    component.onClickCreate();
    expect(spy).toHaveBeenCalled();
  });

  it('should call onCreateTask EventEmitter', () => {
    const spy = spyOn(component.onCreateTask, 'emit');
    component.onClickCreate();
    expect(spy).toHaveBeenCalled();
  });
});
