let contactos = [];
function agregarContacto(id, nombre, apellido, telefono, email) {
    let contacto = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      email: email,
    };
    contactos.push(contacto);
  }

  agregarContacto(0, "Kristin", "Motato", 3173400581, "kristinmotato@gmail.com");
  agregarContacto(1, "Madai", "Motato", 123456789, "madaimotato@gmail.com");
  agregarContacto(2, "Luz", "Luna", 3054877583, "lalneidys13@gmail.com");
  agregarContacto(3, "Luilly", "Motato", 3163047827, "luillyf11@hotmail.com");


function borrarContacto(id) { 
    contactos.splice(id,1);
}

borrarContacto(1)

//console.log(contactos)

function imprimirContactos(){
    console.log("Lista de contactos:");
    for (let i = 0; i < contactos.length; i++) {
        console.log("Contacto #" + contactos[i].id);
        console.log("Nombre:" + contactos[i].nombre);
        console.log("Apellido:" + contactos[i].apellido);
        console.log("Telefono:" + contactos[i].telefono);
        console.log("Email:" + contactos[i].email);
    }
}

//imprimirContactos()

agregarContacto(4, "Melissa", "Perez", 3098677865, "melperez123@gmail.com");

imprimirContactos()
