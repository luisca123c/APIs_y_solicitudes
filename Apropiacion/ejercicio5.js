const peticion9 = async () => {
    //se realiza la peticion fetch a la URL del post eliminado
    let usuario = await fetch('http://localhost:3000/posts/1')
    //se convierte la respuesta a formato JSON
    let data = await usuario.json();
    //creamos una promesa para manejar la respuesta
    return new Promise((resolve) => {
        //declaramos que siempre sea verdadera
        let Proceso = true;
        //verificamos si el proceso es verdadero
        if (Proceso) {
            //imprimimos en consola el mensaje de la solicitud
            console.log("Solicitud 9 = informacion, del post eliminado");
            //resolvemos la promesa con los datos obtenidos
            resolve(data);
        }
    })
}
const peticion10 = async () => {
    //se realiza la peticion fetch a la URL de los usuarios y se almacena la respuesta
    let usuarios = await fetch('http://localhost:3000/posts/')
    //se convierte la respuesta a formato JSON
    let data = await usuarios.json();
    //creamos una promesa para manejar la respuesta
    return new Promise((resolve) => {
        //declaramos que siempre sea verdadera
        let Proceso = true; 
        //verificamos si el proceso es verdadero
        if (Proceso) {
            //imprimimos en consola el mensaje de la solicitud
            console.log("Solicitud 1: Lista completa de usuarios\n");
            //resolvemos la promesa con los datos obtenidos
            resolve(data);
        }
    })
}
//al ejecutarla, sale la lista completa sin incluir el item eliminado
peticion10().then((data)=> console.log(data));
//al ejecutarla, sale un error el cual dice que no fue encontrado
peticion9().then((data) => console.log(data))