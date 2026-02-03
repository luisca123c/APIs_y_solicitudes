// Función asíncrona para actualización total de un recurso (PUT)
const peticion6 = async() =>{
    // Se realiza la petición a un post específico (ID=1) enviando todos los campos
    let actualizacion_post = await fetch('http://localhost:3000/posts/1', {
    method: 'PUT', // PUT reemplaza el recurso completo
    body: JSON.stringify({
        id: `1`,
        userID: 1,
        title: "Introducción Basica a las API",
        body: "Conceptos básicos sobre APIs y su importancia.",
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    // Se procesa la respuesta del servidor
    const post_actualizado = await actualizacion_post.json();
    console.log(`Peticion 6: Publicacion actualizada completamente (ID=1)`);
    console.log(post_actualizado);
}
// Función asíncrona para actualización parcial de un recurso (PATCH)
const peticion7 = async() =>{
    // Se realiza la petición para modificar solo un campo (title) del post ID=1
    let cambio_post = await fetch('http://localhost:3000/posts/1', {
        method: 'PATCH', // PATCH actualiza solo los campos enviados
  body: JSON.stringify({
    title: "Introducción a las API", // Solo enviamos el campo a modificar
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  // Se procesa y muestra la respuesta con el cambio aplicado
  const post_cambiado = await cambio_post.json();
  console.log(`Peticion 7: Publicacion actualizada parcialmente (ID=1)`);
  console.log(post_cambiado);
}
// Función para ejecutar las actualizaciones de forma ordenada
const ejecutarPeticionesActualizacion = async () => {
    await peticion6();
    await peticion7();
}
ejecutarPeticionesActualizacion();