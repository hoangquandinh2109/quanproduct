import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'gender'})
export class GenderPipe implements PipeTransform {
  transform(value: number, exponent?: number): string {
    return value == 0 ? 'Nữ' :( value == 1 ? 'Nam' : 'Khác');
  }
}