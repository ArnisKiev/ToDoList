import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../../Connection/tasks.service';
import { TaskModel } from '../../Models/task.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-creating-task-form',
  templateUrl: './creating.task.form.component.html',
  styleUrls: [
    './creating.task.form.component.scss',
    '../../Styles/controls.scss',
  ],
})
export class CreatingTaskFormComponent implements OnInit {
  addDescription: boolean = false;

  @Output()
  onCreateTask: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(
    private userStore: UserStoreService,
    private taskService: TasksService
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      dueDate: new FormControl(),
      priority: new FormControl(1),
      addDescription: new FormControl(false),
      description: new FormControl(),
    });
  }

  onClickCreate() {
    let id = this.userStore.authUser != null ? this.userStore.authUser.id : ' ';

    const params = this.form.value;

    let task = {
      title: params.title,
      description: params?.description,
      dueDate: params.dueDate,
      priority: params.priority,
      authorId: id,
      isDone: false,
    };

    if (task.description == null) {
      task.description = '';
    }

    this.taskService.createTask(task).subscribe((res) => {});

    this.onCreateTask.emit();
    this.form.reset();
  }

  ngOnInit(): void {}
}
