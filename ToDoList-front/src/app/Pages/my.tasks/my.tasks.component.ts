import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../Connection/tasks.service';
import { TaskModel } from '../../Models/task.model';
import { UserStoreService } from '../../Services/user-store.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my.tasks.component.html',
  styleUrls: ['./my.tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
  tasks: TaskModel[] = [];
  isLoading: boolean = true;
  editTasks: boolean = false;
  currentPage: number = 1;
  maxPage: number = 1;

  constructor(
    private taskService: TasksService,
    private userStore: UserStoreService,
    private router: Router
  ) {}

  loadTasks() {
    let email = this.userStore.authUser?.email;

    console.log(email);

    if (email == undefined) {
      email = '';
    }
    this.taskService.getTasksByUserEmail(email).subscribe((resp) => {
      this.tasks = this.tasks.concat(resp.tasks);
      this.maxPage = Math.ceil(resp.count / 10);
    });
  }

  onCreateTask() {
    this.tasks = [];
    this.loadTasks();
  }
  onDeleteTask(task: TaskModel) {
    this.tasks = [];
    this.taskService.deleteTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  onUpdateTask(task: TaskModel) {
    this.tasks = [];
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks();
    });
  }

  ngOnInit(): void {
    if (this.userStore.authUser == null) {
      this.router.navigate(['signin']);
    }
  }

  ngAfterViewInit() {
    this.loadTasks();
  }

  @HostListener('window:scroll', ['$event']) //event for pagination
  onScroll(event: any) {
    let currentPositionOfScroller = window.scrollY + window.innerHeight; //current position of scroller
    let depthOfScroll = event.target.body.offsetHeight * 0.95; //deep of scroll (height of document)

    if (currentPositionOfScroller >= depthOfScroll && this.isLoading == false) {
      //if we go to the end of scrol. we load adding tasks
      if (this.currentPage <= this.maxPage) {
        this.loadTasks();
        this.currentPage++;
      }
    }
  }
}
