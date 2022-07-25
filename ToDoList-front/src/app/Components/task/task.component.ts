import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TasksService } from '../../Connection/tasks.service';
import { TaskModel } from '../../Models/task.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss', '../../Styles/buttons.scss'],
})
export class TaskComponent implements OnInit {
  deleteRows: boolean = false;

  @Input()
  task: TaskModel = new TaskModel();

  @Output()
  onTaskDelete: EventEmitter<TaskModel> = new EventEmitter();

  @Output()
  onChangeStatus: EventEmitter<TaskModel> = new EventEmitter();

  @Input()
  showDeleteBtn: boolean = false;

  constructor(
    private taskService: TasksService,
    private userStore: UserStoreService
  ) {}

  onClickDelete() {
    if (this.userStore.authUser?.id == this.task.authorId) {
      this.onTaskDelete.emit(this.task);
    }
  }

  onClickChangeStatus() {
    if (this.userStore.authUser?.id == this.task.authorId) {
      this.task.isDone = !this.task.isDone;
      this.onChangeStatus.emit(this.task);

      //this.taskService.updateTask(this.task).subscribe();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let width = event.target.innerWidth;

    if (width <= 400) {
      this.deleteRows = true;
    } else {
      this.deleteRows = false;
    }
  }

  ngOnInit(): void {}
}
