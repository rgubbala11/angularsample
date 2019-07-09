import { Pipe } from '@angular/core';

@Pipe({
    name: 'impurePipe'
})
export class ImPurePipeDemo {
  transform(val: any, args: any) {
    if (args === undefined) {
      return val;
    }

    if (val.length > args) {
      return val.substring(0, args) + '...';
    } else {
      return val;
    }
  }
}