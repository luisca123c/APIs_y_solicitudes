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
    .then((response) => response.json())
    .then((json) => console.log(json));
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
  .then((response) => response.json())
  .then((json) => console.log(json));
}
peticion6();
peticion7();