import { Pipe, PipeTransform } from '@angular/core';
import { environment } from './../../../environments/environment';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (path.trim().length) {
      return path;
    }
    return 'cv.png';
  }
}
