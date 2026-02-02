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
})
  const nuevo_post = await post.json();
  console.log(`Peticion 4: Nueva publicacion creada por un usuario existente`);
  console.log(nuevo_post);
  
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
  const nuevo_comentario = await comentario.json();
  console.log(`Peticion 5: Nuevo comentario creado para una publicacion existente`);
  console.log(nuevo_comentario);
}

// peticion4().then((post) => console.log(post.json()));
// peticion5().then((comentario) => console.log(comentario.json()));

const ejecutarPeticiones = async () => {
    await peticion4();
    await peticion5();
}

ejecutarPeticiones();