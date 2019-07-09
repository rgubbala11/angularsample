import { Pipe } from '@angular/core';

@Pipe({
    name: 'purePipe'
})
export class PurePipeDemo {
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