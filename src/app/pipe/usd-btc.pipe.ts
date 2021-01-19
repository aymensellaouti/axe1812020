import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdBtc',
})
export class UsdBtcPipe implements PipeTransform {
  transform(amount: number, ...args: number[]): number {
    if (!args[0]) {
      return amount * 36000;
    }
    return amount / 36000;
  }
}
