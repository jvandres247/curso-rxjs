import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';


const numeros = [1,2,3,4,5];


const totalAcumulador = (acc, crr) => acc + crr;

// Reduce 
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);

// Redux
interface Usuario {
    id?: string;
    auntenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: '001', auntenticado: false, token: null},
    {id: '001', auntenticado: true, token: 'ABC'},
    {id: '001', auntenticado: true, token: 'ABC123'},
];

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc, crr) => {
        return{...acc, ...crr}
    }, {edad: 33})
);

const id$ = state$.pipe(
    map(state => state)
);

id$.subscribe(console.log)