const peticion1 = async () => {
    let usuarios = await fetch('http://localhost:3000/users')
    let data = await usuarios.json();
    return new Promise((resolve) => {
        let Proceso = true; 
        if (Proceso) {
            console.log("Solicitud 1: Lista completa de usuarios\n");
            resolve(data);
        }
    })
}

const peticion2 = async () => {
    let usuario = await fetch('http://localhost:3000/users/5')
    let data = await usuario.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log("Solicitud 2: Informacion de usuario especifico (ID=5)\n");
            resolve(data);
        }
    })
}
   
const peticion3 = async () => {
    let publicaciones = await fetch('http://localhost:3000/posts/5')
    let data = await publicaciones.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log("Solicitud 3: Lista de publicaciones de un usuario especifico (ID=5)\n");
            resolve(data);
        }
    })
}

peticion1().then((data) => console.log(data));
peticion2().then((data) => console.log(data));
peticion3().then((data) => console.log(data));