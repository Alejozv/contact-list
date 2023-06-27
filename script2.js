const contactos = 
  [
  {
    id: 523456,
    nombre: "Juan",
    apellidos: "Jaramillo Cruz",
    telefono: 3246789011,
    ubicaciones: "USA",
    ciudad: "Lavonside",
    dirección: "7799 Fiona Forge"
  },
  {
    id: 345667,
    nombre: "Natalia",
    apellidos: "Correa Beltrán",
    telefono: 3896792011,
    ubicaciones: "USA",
    ciudad: "North Ettie",
    dirección: "140 Gorczany Pass"
  },
  {
    id: 547689,
    nombre: "Paula",
    apellidos: "Rendón Arboleda",
    telefono: 3436782022,
    ubicaciones: "Canada",
    ciudad: "Lake Ronfurt",
    dirección: "69499 Mauricio Courts"
  },
  {
    id: 220459,
    nombre: "Jorge",
    apellidos: "Botero Zuluaga",
    telefono: 336679056,
    ubicaciones: "Australia",
    ciudad: "Hughville",
    dirección: "53 / 2 Rau Circuit"
  }
]
function agregarcontacto (id,nombre,apellidos,telefono,ubicaciones,ciudad,dirección) {
  let nuevocontacto = {
    id: id,
    nombre: nombre,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: ubicaciones,
    ciudad: ciudad,
    dirección: dirección
  };
  contactos.push(nuevocontacto);
  return contactos; 
}
const nuevapersona = agregarcontacto(4567,"Sofia","Jaramillo Valencia",3245980389,"Alemania","Wolfburg","45 Vainz Sreet");
console.log(nuevapersona);

function eliminarcontacto(nombre) {
  for (let i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
      contactos.splice(i, 1);
      break;
    }
  }
  return contactos;
  }
 
const contactosactualizados = eliminarcontacto("Jorge");
console.log(contactosactualizados);
