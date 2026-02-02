//se crea la funcion asincrona para la primera peticion
const peticion1 = async () => {
    //se realiza la peticion fetch a la URL de los usuarios y se almacena la respuesta
    let usuarios = await fetch('http://localhost:3000/users')
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
//se crea la funcion asincrona para la segunda peticion
const peticion2 = async () => {
    //se realiza la peticion fetch a la URL de un usuario especifico y se almacena la respuesta
    let usuario = await fetch('http://localhost:3000/users/5')
    //se convierte la respuesta a formato JSON
    let data = await usuario.json();
    //creamos una promesa para manejar la respuesta
    return new Promise((resolve) => {
        //declaramos que siempre sea verdadera
        let Proceso = true;
        //verificamos si el proceso es verdadero
        if (Proceso) {
            //imprimimos en consola el mensaje de la solicitud
            console.log("Solicitud 2: Informacion de usuario especifico (ID=5)\n");
            //resolvemos la promesa con los datos obtenidos
            resolve(data);
        }
    })
}
//se crea la funcion asincrona para la tercera peticion
const peticion3 = async () => {
    //se realiza la peticion fetch a la URL de las publicaciones de un usuario especifico y se almacena la respuesta
    let publicaciones = await fetch('http://localhost:3000/posts/5')
    //se convierte la respuesta a formato JSON
    let data = await publicaciones.json();
    //creamos una promesa para manejar la respuesta
    return new Promise((resolve) => {
        //declaramos que siempre sea verdadera
        let Proceso = true;
        //verificamos si el proceso es verdadero
        if (Proceso) {
            //resolvemos la promesa con los datos obtenidos
            console.log("Solicitud 3: Lista de publicaciones de un usuario especifico (ID=5)\n");
            //resolvemos la promesa con los datos obtenidos
            resolve(data);
        }
    })
}
//llamamos a las funciones y manejamos las promesas para imprimir los datos en consola
peticion1().then((data) => console.log(data));
peticion2().then((data) => console.log(data));
peticion3().then((data) => console.log(data));