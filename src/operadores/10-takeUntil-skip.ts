
import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';



const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);


const counter$ = interval(1000);
//const cliclBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    skip(1)
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
})