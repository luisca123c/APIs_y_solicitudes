const peticionEnunciado3 = async (idBusqueda) => {
    // se realiza la peticion fetch para obtener todas las publicaciones
    let respuestaPosts = await fetch('http://localhost:3000/posts')
    let listaPosts = await respuestaPosts.json();
    // se realiza la peticion fetch para obtener todos los comentarios
    let respuestaComments = await fetch('http://localhost:3000/comments')
    let listaComments = await respuestaComments.json();
    // creamos una promesa para procesar la busqueda especifica
    return new Promise((resolve) => {
        // declaramos que el proceso es verdadero
        let Proceso = true; 
        if (Proceso) {
            // creamos una variable para guardar el resultado encontrado
            let publicacionDetallada = null;
            // usamos foreach para buscar la publicacion que coincide con el id
            listaPosts.forEach(post => {
                // convertimos ambos a numero para asegurar que la comparacion sea correcta
                if (Number(post.id) === Number(idBusqueda)) {
                    // filtramos los comentarios que pertenecen a esta publicacion
                    let comentariosAsociados = listaComments.filter(comentario => Number(comentario.postId) === Number(idBusqueda));
                    // guardamos la informacion detallada en nuestro objeto
                    publicacionDetallada = {
                        titulo: post.title,
                        contenido: post.body,
                        numeroDeComentarios: comentariosAsociados.length
                    };
                }
            });
            // imprimimos el mensaje de la solicitud en consola
            console.log("solicitud enunciado 3: busqueda de publicacion especifica\n");
            // resolvemos la promesa con el objeto encontrado
            resolve(publicacionDetallada);
        }
    })
}
// llamamos a la funcion pasando el id que queremos buscar (por ejemplo el 5)
peticionEnunciado3(5).then((data) => {
    if (data) {
        console.log(data);
    } else {
        console.log("publicacion no encontrada");
    }
});