import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorialMemoized',
  standalone: true,
  pure: false,
})
export class MemoizedPipe implements PipeTransform {
  private cache = new Map<number, number>();

  transform(value: number): number {
    if (this.cache.has(value)) {
      console.log('Get cached for: ', value);
      return this.cache.get(value)!;
    } else {
      const result = this.factorial(value);
      this.cache.set(value, result);
      console.log('Get actual result: ', value);
      return result;
    }
  }

  private factorial(n: number): number {
    if (n < 0) return 0;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
