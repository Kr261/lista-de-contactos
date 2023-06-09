let contactos = [];

function agregarContacto(id, nombre, apellido, telefono, ciudad, direccion) {
    let contacto = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      ubicaciones: {
        ciudad: ciudad,
        direccion: direccion
      }
    };
    contactos.push(contacto);
  }

  agregarContacto(0, "Kristin", "Motato", 3173400581, "Valledupar", "Torres del Norte");

function borrarContacto(id) { 
    contactos.splice(id,1);
}

borrarContacto(1)

//console.log(contactos)

function imprimirContactos(){
    console.log("Lista de contactos:");
    for (let i = 0; i < contactos.length; i++) {
        console.log("Contacto # " + contactos[i].id);
        console.log("Nombre: " + contactos[i].nombre);
        console.log("Apellido: " + contactos[i].apellido);
        console.log("Telefono: " + contactos[i].telefono);
        console.log(`Ubicaciones:\n Ciudad:  ${contactos[i].ubicaciones.ciudad}\n Dirección: ${contactos[i].ubicaciones.direccion}`);
    }
}

agregarContacto(4, "Melissa", "Perez", 3098677865, "Barranquilla", "Quizas")

imprimirContactos()

// Función para actualizar un contacto 

function actualizarContacto(contactos, id, [nombre,
  apellido,
  telefono,
  ciudad,
  direccion]
) {

  const indice = contactos.findIndex(contacto => contacto.id === id);

  if (indice !== -1) {
    
    // Actualizar el contacto con los nuevos datos
   contactos[indice] = [nombre,
apellido,
telefono,
ciudad,
direccion];
    console.log('Contacto actualizado:', [nombre,
apellido,
telefono,
ciudad,
direccion]);
  } else {
    console.log('Error.');
  }

  return imprimirContactos(contactos);

}

console.log(actualizarContacto(contactos,4,[ "Melissa", "Perez", 3098677865, "Ocaña", "sucasa"]))

