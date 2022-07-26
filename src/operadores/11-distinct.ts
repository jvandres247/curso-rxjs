import {of, from} from 'rxjs';
import {distinct} from 'rxjs/operators';

const numeros$ = of(1,2,2,3,4,5,5,5,6,7,8,9,9,9,10);

numeros$.pipe(
    distinct() // ===
)
.subscribe(console.log);

interface Personaje {
    nombre: string
}

const personajes:Personaje[] = [
    {nombre: 'megaman'},
    {nombre: 'X'},
    {nombre: 'megaman'},
    {nombre: 'Zero'},
    {nombre: 'megaman'},
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log) 