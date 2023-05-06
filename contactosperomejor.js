function obtenerContactoJSON() {
    fetch(listadecontactosJSON.json)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Aquí puedes procesar la lista de contactos como un objeto JavaScript
    })
    .catch(error => console.error(error));
}

