import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class Filter implements PipeTransform {
  public transform(value, keys: string, term: string) {
    let result;
    if (!term) { return value; }
    result =  (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && item[key] === term));
    if (result.length === 0) {
      return [-1];
    }
    return result;
  }
}
