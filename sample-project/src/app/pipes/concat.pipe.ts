import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'concat',
    standalone: true
})
export class ConcatPipe implements PipeTransform {
    transform(value: string, ...args: string[]): string {
        return value
    }
}