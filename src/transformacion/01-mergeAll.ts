import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}

// Streams
const input$ = fromEvent( textInput, 'keyup' );


input$.pipe(
    debounceTime(500),
    pluck('target','value'),
    map( texto => ajax.getJSON(
        `https://api.github.com/search/users?q=${ texto }`
    )),
    mergeAll(),
    pluck('items')
).subscribe( mostrarUsuarios );

