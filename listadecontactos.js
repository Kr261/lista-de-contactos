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

//imprimirContactos()

agregarContacto(4, "Melissa", "Perez", 3098677865, "Barranquilla", "Quizas")

imprimirContactos()

console.log(contactos)

const newContactos = JSON.stringify(contactos);
console.log(newContactos) 
