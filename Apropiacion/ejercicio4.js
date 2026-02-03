// Función para eliminar un recurso específico del servidor
const peticion8 = () =>{
    // Se realiza la solicitud fetch especificando el ID del recurso a borrar
    let eliminacion_post = fetch('http://localhost:3000/posts/1', {
    method: 'DELETE', // Método estándar para eliminación
    })
    // Se notifica la acción realizada en consola
    console.log(`Peticion 8: Publicacion eliminada (ID=1)`);
}
// Ejecución de la solicitud de eliminación
peticion8();