import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityTask',
})
export class PriorityTaskPipe implements PipeTransform {
  transform(value: number) {
    switch (value) {
      case 1:
        return 'Low';
      case 2:
        return 'Middle';
      case 3:
        return 'High';
    }

    return '';
  }
}
