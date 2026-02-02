const peticion6 = async() =>{
    let actualizacion_post = await fetch('http://localhost:3000/posts/1', {
    method: 'PUT',
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
    const post_actualizado = await actualizacion_post.json();
    console.log(`Peticion 6: Publicacion actualizada completamente (ID=1)`);
    console.log(post_actualizado);
}
const peticion7 = async() =>{
    let cambio_post = await fetch('http://localhost:3000/posts/1', {
        method: 'PATCH',
  body: JSON.stringify({
    title: "Introducción a las API",
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  const post_cambiado = await cambio_post.json();
  console.log(`Peticion 7: Publicacion actualizada parcialmente (ID=1)`);
  console.log(post_cambiado);
}

const ejecutarPeticiones = async () => {
    await peticion6();
    await peticion7();
}

ejecutarPeticiones();