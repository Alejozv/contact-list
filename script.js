let contactos = ['Juan Jaramillo', 'Natalia Correa', 'Paula Rendon', 'Jorge Botero', 'Andrea Bustamante', 'Felipe Calderon', 'Sofia Rendon', 'Pablo Martinez'] 

function agregarcontacto (){
  let nuevocontacto = prompt ('Nuevo Contacto: ');
  contactos.push(nuevocontacto);
  return contactos;
} 

function eliminarcontactos () {
  let quitarcontacto = prompt ('Indique indice del contacto a eliminar: ' );
  contactos.splice (quitarcontacto, 1);
  return contactos;
}
agregarcontacto ();
eliminarcontactos ();

function imprimircontactos () {
  console.log (contactos);
  
}
imprimircontactos();