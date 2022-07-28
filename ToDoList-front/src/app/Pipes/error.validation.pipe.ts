import { Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERRORS } from '../validation.errors';

@Pipe({
  name: 'errorValidation',
})
export class ErrorValidationPipe implements PipeTransform {
  transform(errors: any): any {
    const error = Object.keys(errors)[0].toString();

    return VALIDATION_ERRORS.get(error);
  }
}
