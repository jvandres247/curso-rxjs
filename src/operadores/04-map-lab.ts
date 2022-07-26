import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum metus nulla, vel feugiat tortor condimentum quis. Nunc in ante tincidunt, eleifend metus in, pellentesque turpis. Donec tempor leo ac tortor dictum mollis in id enim. Phasellus interdum, urna sed aliquet vehicula, lectus est faucibus leo, viverra varius justo tellus in lorem. Aenean commodo dolor rutrum semper viverra. Vivamus varius hendrerit semper. Morbi non pharetra nibh. Vivamus risus nunc, varius ac tempor sit amet, mattis eu mauris. Aliquam justo metus, rutrum quis vehicula in, scelerisque ullamcorper urna. Etiam lobortis, erat ac eleifend auctor, leo ipsum ultrices libero, quis auctor nisi eros eu est. Ut purus nulla, imperdiet ut cursus a, semper ac nibh. Ut quis risus vitae ante pharetra fermentum sit amet in ex. Duis porttitor vehicula metus ut ullamcorper. Nam tincidunt lorem ut sem gravida rhoncus. Morbi tortor velit, mollis sed felis non, ullamcorper vehicula lorem. Morbi eu ornare mauris, vitae interdum dui.
<br/><br/>
Quisque vitae purus sed nulla malesuada dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero eget lectus laoreet malesuada. Morbi molestie fermentum feugiat. Cras interdum luctus nisi, et pharetra nunc convallis sit amet. Nunc ornare urna non orci volutpat fringilla. Sed tincidunt velit ac libero efficitur porta. Ut ut nisi mauris.
<br/><br/>
Cras varius, sem ac egestas ullamcorper, dolor leo venenatis mauris, a maximus tellus ante non enim. Aenean hendrerit, est at viverra efficitur, risus nunc finibus dui, non venenatis purus metus eget erat. Aliquam non lectus vitae massa commodo bibendum eget quis tortor. Fusce id convallis nibh, non vestibulum nibh. Proin aliquam congue massa, ut sodales lorem mollis vel. Sed pretium lacinia pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In maximus viverra pellentesque. Quisque turpis mauris, egestas nec pellentesque non, finibus nec metus. Nam sit amet porttitor turpis, eu mattis orci. Etiam in lacus et enim ultricies faucibus non id quam. Phasellus ut purus a nisi hendrerit cursus. Nulla finibus faucibus magna, at feugiat justo cursus ac. Fusce dapibus ipsum et sem eleifend commodo.
<br/><br/>
Duis posuere dapibus suscipit. Aenean commodo dolor velit, et euismod mi tincidunt ut. Donec eu malesuada odio, vitae volutpat mi. Proin laoreet neque viverra orci fermentum ullamcorper. Praesent quis dictum ligula. Suspendisse semper eget diam nec porttitor. Suspendisse urna quam, congue eget ultricies lobortis, condimentum id augue. Aenean ultricies feugiat arcu, lacinia sagittis arcu pellentesque id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi fringilla ante eget tellus fermentum, non maximus diam convallis. Donec vehicula ac justo fringilla pretium.
<br/><br/>
Duis varius tempus pulvinar. Donec quis diam ipsum. Nam aliquet sem aliquet mauris blandit, in eleifend nisl bibendum. Ut lacinia molestie commodo. Proin a enim metus. Integer pharetra in diam ac fermentum. Mauris lobortis scelerisque lectus id tincidunt. Pellentesque dictum lectus quis ultrices congue. Mauris ac commodo ligula. Phasellus non mattis nisl, sit amet sollicitudin dolor. Morbi ut porttitor urna.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//Funcion para el calculo
const calcularPorcentajeScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;

    return(scrollTop / (scrollHeight-clientHeight)) * 100;
}

//Streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    //map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
)

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})