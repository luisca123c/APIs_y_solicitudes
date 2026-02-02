const peticion8 =() =>{
    let eliminacion_post = fetch('http://localhost:3000/posts/1', {
    method: 'DELETE',
    })
    console.log(`Peticion 8: Publicacion eliminada (ID=1)`);
}
peticion8();