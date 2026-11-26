// Tarea individual - Laboratorio 08

class Tarea {
  constructor(nombre, estado) {
    this.nombre = nombre;
    this.estado = estado;
  }

  descripcion() {
    return this.nombre + " - " + this.estado;
  }
}

const tarea1 = new Tarea("Estudiar JavaScript", "Pendiente");
const tarea2 = new Tarea("Resolver laboratorio", "Pendiente");

console.log(tarea1.descripcion());
console.log(tarea2.descripcion());

const listaTareas = document.querySelector("#listaTareas");
const tareas = [tarea1, tarea2];

// Función para mostrar una tarea en la página
function mostrarTarea(tarea) {
  const li = document.createElement("li");
  li.textContent = tarea.descripcion();

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";

  btnBorrar.addEventListener("click", () => {
    li.remove();

    const posicion = tareas.indexOf(tarea);
    if (posicion !== -1) {
      tareas.splice(posicion, 1);
    }
  });

  li.appendChild(btnBorrar);
  listaTareas.appendChild(li);
}

// Mostrar las tareas iniciales
tareas.forEach((tarea) => {
  mostrarTarea(tarea);
});

// Evento para agregar nuevas tareas
const formulario = document.querySelector("#formulario");
const nombreTarea = document.querySelector("#nombreTarea");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = nombreTarea.value.trim();

  if (nombre === "") {
    alert("Escribe una tarea antes de agregarla.");
    return;
  }

  const nuevaTarea = new Tarea(nombre, "Pendiente");

  tareas.push(nuevaTarea);
  mostrarTarea(nuevaTarea);

  nombreTarea.value = "";
});