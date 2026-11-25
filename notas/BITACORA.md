# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Google Chrome
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|---|---|---|
| textContent desde app.js | El titulo cambio a Hola TECSUP | Si |
| style.color | El titulo cambio a color azul | Si |

 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|---|---|---|
| click | Un clic sobre el boton | 1 |
| dblclick | Doble clic sobre el boton | 1 |
| mouseover | Entrada del puntero al boton | 1 |

evento.type muestra el tipo de evento ejecutado, por ejemplo, click.

evento.target identifica el elemento HTML que origino el evento, en este caso, el boton Sumar 1.
 
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo cambio mientras escribia | No |
| Enviar sin preventDefault | El mensaje aparecio brevemente y desaparecio | Si |
| Enviar con preventDefault, correo sin @ | Aparecio un mensaje de error en rojo | No |
| Enviar con preventDefault, correo con @ | Aparecio el mensaje Enviado con el correo | No |


Además, podemos agregar nuevos productos al arreglo y
mostrarlos automáticamente en la página mediante JavaScript.