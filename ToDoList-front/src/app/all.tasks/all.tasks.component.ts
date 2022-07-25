import { Component, HostListener, OnInit } from '@angular/core';
import { TasksService } from '../Connection/tasks.service';
import { TaskModel } from '../Models/task.model';

@Component({
  selector: 'app-all-tasks',
  templateUrl: 'all.tasks.component.html',
  styleUrls: ['./all.tasks.component.scss', './../Styles/loader.scss'],
})
export class AllTasksComponent implements OnInit {
  tasks: TaskModel[] = [];
  isLoading: boolean = false;
  currentPage: number = 1;
  maxPage: number = 1;
  keyWord: string = '';

  constructor(private taskServices: TasksService) {}

  loadTasks() {
    this.isLoading = true;
    this.taskServices
      .getTaskByKeuWord(this.keyWord, this.currentPage)
      .subscribe((resp) => {
        this.tasks = this.tasks.concat(resp.tasks);
        this.maxPage = Math.ceil(resp.count / 10);
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  onInput() {
    this.currentPage = 1;
    this.tasks = [];

    this.loadTasks();
  }

  @HostListener('window:scroll', ['$event']) //event for pagination
  onScroll(event: any) {
    let currentPositionOfScroller = window.scrollY + window.innerHeight; //current position of scroller
    let depthOfScroll = event.target.body.offsetHeight * 0.95; //deep of scroll (height of document)

    if (currentPositionOfScroller >= depthOfScroll && this.isLoading == false) {
      //if we go to the end of scrol. we load adding tasks
      if (this.currentPage <= this.maxPage) {
        this.currentPage++;
        this.loadTasks();
      }
    }
  }
}
