// Función asíncrona para crear una nueva publicación
const peticion4 = async () =>{
    // Se realiza la petición fetch con el método POST a la ruta de publicaciones
    let post = await fetch('http://localhost:3000/posts', {
  method: 'POST', // Definimos el método de envío
  body: JSON.stringify({
    userId : 5, // ID del usuario asociado
    title : `Asincronía`, // Título de la nueva publicación
    body : `Conceptos basicos de la asincronía en JavaScript`, // Contenido de la publicación
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8', // Definimos el tipo de contenido como JSON
  },
})
  // Convertimos la respuesta recibida a formato JSON
  const nuevo_post = await post.json();
  // Mostramos en consola el mensaje de éxito y el objeto creado
  console.log(`Peticion 4: Nueva publicacion creada por un usuario existente`);
  console.log(nuevo_post);
  
}
// Función asíncrona para registrar un nuevo comentario
const peticion5 = async() =>{
    // Se realiza la petición fetch con método POST a la ruta de comentarios
    let comentario = await fetch('http://localhost:3000/comments', {
  method: 'POST',
  body: JSON.stringify({
    postId : 5, // ID de la publicación a la que pertenece el comentario
    name : `Comentario 11`, // Nombre del autor o título del comentario
    body : `Buen ejemplo de post`, // Contenido del comentario
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  // Convertimos la respuesta a JSON para visualizar los datos devueltos por el servidor
  const nuevo_comentario = await comentario.json();
  console.log(`Peticion 5: Nuevo comentario creado para una publicacion existente`);
  console.log(nuevo_comentario);
}
// Función para orquestar la ejecución secuencial de las peticiones de creación
const ejecutarPeticiones = async () => {
    await peticion4(); // Espera a que se cree el post
    await peticion5(); // Espera a que se cree el comentario
}
ejecutarPeticiones();