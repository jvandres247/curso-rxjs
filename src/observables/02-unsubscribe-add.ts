import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subscriber => {
    let contador = 0;
   const interval = setInterval(()=>{
        contador ++;
        subscriber.next(contador);
    }, 1000);

    setTimeout(() => {
        subscriber.complete()
    },2500)

    return () => {
        clearInterval(interval);
        console.log('intervarlo destruido');
        
    }
});


const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add(subs2);


setTimeout(() => {
    subs.unsubscribe()
    console.log('Completado timeout');
}, 6000)