import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if((!value || !order)) {
            return value; 
    }
    return orderBy(value, [column], [order]);
  }
}