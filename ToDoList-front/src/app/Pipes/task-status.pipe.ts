import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus',
})
export class TaskStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    if (value) return 'Completed';

    return 'Uncompleted';
  }
}
