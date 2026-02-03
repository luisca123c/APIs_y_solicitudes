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
            // 1. CREAMOS UN ARRAY VACÍO para ir guardando los resultados
            let listadoUsuariosPosts = [];
            // 2. RECORREMOS la lista de usuarios con forEach
            listaUsuarios.forEach(usuario => {
                // Convertimos el ID a número para que la comparación funcione
                let usuarioIdNumerico = Number(usuario.id);
                // Filtramos las publicaciones que pertenecen a este usuario
                let conteo = listaPosts.filter(post => post.userId === usuarioIdNumerico).length;
                // 3. CREAMOS EL OBJETO con el formato que queremos
                let objetoUsuario = {
                    nombreUsuario: usuario.name,
                    publicacionesAsociadas: conteo
                };
                // 4. agregamos el objeto al array que creamos al principio
                listadoUsuariosPosts.push(objetoUsuario);
            });
            // imprimimos en consola el mensaje de la solicitud
            console.log("Solicitud Ejercicio 1: Usuarios y publicaciones\n");
            // resolvemos la promesa con el listado que llenamos manualmente
            resolve(listadoUsuariosPosts);
        }
    })
}
// llamamos a la funcion y manejamos la promesa
peticionEnunciado1().then((data) => console.log(data));