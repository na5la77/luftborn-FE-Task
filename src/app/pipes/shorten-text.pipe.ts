import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (typeof value !== 'string') {
      return value as string;
    }

    const words = value.split(' ');

    if (words.length > 5) {
      const shortenedText = words.slice(0, 5).join(' ');
      return `${shortenedText}...`;
    }

    return value;
  }
}
