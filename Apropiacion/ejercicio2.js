const peticion4 = async () =>{
    let post = await fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    userId : 5,
    title : `Asincronía`,
    body : `Conceptos basicos de la asincronía en JavaScript`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
  new Promise((resolve) => {
    let Proceso = true;
    if (Proceso) {
        console.log("Peticion 4: Nueva publicacion creada");
        resolve(post);
    }
    }).then((response) => response.json())
  .then((json) => console.log(json));
}

const peticion5 = async() =>{
    let comentario = await fetch('http://localhost:3000/comments', {
  method: 'POST',
  body: JSON.stringify({
    postId : 5,
    name : `Comentario 11`,
    body : `Buen ejemplo de post`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  new Promise((resolve) => { 
    let Proceso = true;
    if (Proceso) {
        console.log("Peticion 5: Nuevo comentario creado en una publicacion ya existente");
        resolve(comentario);
    }
    }).then((response) => response.json())
  .then((json) => console.log(json));
}

peticion4().then(() => console.log("\n"));
peticion5().then(() => console.log("\n"));