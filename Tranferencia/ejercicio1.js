const peticionEnunciado1 = async () => {
    // se realiza la peticion fetch a la URL de los usuarios y se almacena la respuesta
    let respuestaUsuarios = await fetch('http://localhost:3000/users')
    let listaUsuarios = await respuestaUsuarios.json();

    // se realiza la peticion fetch a la URL de las publicaciones y se almacena la respuesta
    let respuestaPosts = await fetch('http://localhost:3000/posts')
    let listaPosts = await respuestaPosts.json();

    // creamos una promesa para manejar el procesamiento de los datos
    return new Promise((resolve) => {
        // declaramos que siempre sea verdadera
        let Proceso = true; 
        
        // verificamos si el proceso es verdadero
        if (Proceso) {
            // creamos un array para almacenar el listado final solicitado
            // .map() recorre cada usuario de la lista y crea un nuevo array transformado.
            // Por cada "usuario", realiza el conteo de sus posts y genera un objeto 
            // con el formato final (nombre y cantidad), sin modificar los datos originales.
            let listadoUsuariosPosts = listaUsuarios.map(usuario => {
                
                // Convertimos usuario.id a Number para que coincida con el tipo en posts
                let usuarioIdNumerico = Number(usuario.id);
                
                // Filtramos las publicaciones comparando números con números
                let conteo = listaPosts.filter(post => post.userId === usuarioIdNumerico).length;
                
                // Retornamos el objeto con el nombre y la cantidad real
                return {
                    nombreUsuario: usuario.name,
                    publicacionesAsociadas: conteo
                };
            });

            // imprimimos en consola el mensaje de la solicitud
            console.log("Solicitud Enunciado 1: Usuarios y cantidad de publicaciones (Corregido)\n");
            
            // resolvemos la promesa con el listado procesado
            resolve(listadoUsuariosPosts);
        }
    })
}

// llamamos a la funcion y manejamos la promesa para imprimir los datos en consola
peticionEnunciado1().then((data) => console.log(data));