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

tareas.forEach((tarea) => {
  const li = document.createElement("li");
  li.textContent = tarea.descripcion();
  listaTareas.appendChild(li);
});