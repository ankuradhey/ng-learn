import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(value: any[], order = 'asc', column: string = ''): any[] {
    if(!value) {
            return value; 
    }
    return orderBy(value, [column], [order]);
  }
}