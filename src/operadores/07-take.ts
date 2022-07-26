import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numero$ = of(1,2,3,4,5).pipe(
    tap(console.log)
);

numero$.pipe(
    tap(t => console.log('tap: ', t)),
    take(4)
).subscribe({
    next: val => console.log('Next: ', val),
    complete: () => console.log('complete'),
})