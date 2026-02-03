const peticionEnunciado2 = async () => {
    // se realiza la peticion fetch a la URL de las publicaciones y se almacena la respuesta
    let respuestaPosts = await fetch('http://localhost:3000/posts')
    let listaPosts = await respuestaPosts.json();
    // se realiza la peticion fetch a la URL de los comentarios y se almacena la respuesta
    let respuestaComments = await fetch('http://localhost:3000/comments')
    let listaComments = await respuestaComments.json();
    // creamos una promesa para manejar el procesamiento de los datos
    return new Promise((resolve) => {
        // declaramos que siempre sea verdadera
        let Proceso = true; 
        // verificamos si el proceso es verdadero
        if (Proceso) {
            // creamos el array vacio donde guardaremos el análisis
            let listadoAnalisisPosts = [];
            // recorremos cada publicación de la lista con forEach
            listaPosts.forEach(post => {
                // convertimos el id del post a número para asegurar la comparación correcta
                let postIdNumerico = Number(post.id);
                // filtramos los comentarios cuyo postId coincida con la publicación actual
                let totalComentarios = listaComments.filter(comentario => comentario.postId === postIdNumerico).length;
                // definimos el estado mediante un condicional simple
                let estadoPost = "";
                if (totalComentarios > 0) {
                    estadoPost = "Con comentarios";
                } else {
                    estadoPost = "Sin comentarios";
                }
                // creamos un objeto con los datos de salida solicitados
                let resultado = {
                    titulo: post.title,
                    numeroDeComentarios: totalComentarios,
                    estado: estadoPost
                };
                // agregamos el objeto al array que declaramos al principio
                listadoAnalisisPosts.push(resultado);
            });
            // imprimimos en consola el mensaje de la solicitud
            console.log("Solicitud Enunciado 2: Analisis de interaccion\n");
            // resolvemos la promesa con el listado final que llenamos
            resolve(listadoAnalisisPosts);
        }
    })
}
// llamamos a la funcion y manejamos la promesa para imprimir los datos
peticionEnunciado2().then((data) => console.log(data));