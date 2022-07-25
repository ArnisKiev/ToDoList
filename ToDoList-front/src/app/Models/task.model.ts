export class TaskModel {
  id: string;
  title: string;
  description?: string;
  dueDate: Date;
  isDone: boolean;
  priority: number;
  authorId: string;
  author?: string;

  constructor() {
    this.id = '';
    this.title = '';
    this.dueDate = new Date();
    this.priority = 0;
    this.authorId = '';
    this.author = '';
    this.isDone = false;
  }
}
