import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let search;
    // console.log('In filter Pipe', 'arguments', args);
    if (!value) { return []; }
    if (value) {
      const filtered = value.filter(ele => ele.name.toLowerCase().indexOf(args) === 0);
      search = filtered.map(ele => ele);
    }
    // console.log('search', search);
    return search;
  }

}
