let tareas = [
   {id:1, Nombre:"Perrito", Completada:false},
   {id:2, Nombre:"Gatito", Completada:false},
   {id:3, Nombre:"Conejito", Completada:false} 
];

function marcartareacompletada(id){
 for (let i = 0; i < tareas.length; i++) {
 if (tareas[i].id === id) {
tareas[i].completada = true;
return;
}
}
}

marcartareacompletada(2);
console.log(tareas)