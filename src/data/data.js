


const videojuegos = [
    {
        id: 0,
        categoria:"aventura",
        descripcion: "Final Fantasy VII Rebirth es un RPG en grupos que ofrece un combate accesible en tiempo real. Los jugadores tienen todo el control cuando blanden la espada Buster Sword de Cloud, y cuando aprovechan las técnicas de artes marciales de Tifa y el arma Gatling Gun que se acopla al brazo de Barret.",
        imagen: "/img/finalFantasy.png",
        nombre: "Final Fantasy VII Rebirth",
        precio: 240,
        stock: 9,

    },
    {
        id: 1,
        categoria:"aventura",
        descripcion: "Assassin's Creed Shadows es un juego de acción y aventuras con sigilo similar a sus predecesores. Está desarrollado sobre una versión mejorada de Anvil, utilizando iluminación dinámica e interacciones ambientales, además de permitir a los jugadores manipular sombras y usar un gancho de agarre para parkour.",
        imagen: "/img/assassincred.png",
        nombre: "Assassin's Creed Shadows",
        precio: 250,
        stock: 25,

    }, {

        id: 2,
        categoria:"accion",
        descripcion: "MGS: SNAKE EATER combina sonidos, acción sigilosa inmersiva y gráficos nunca vistos con una trama fascinante que permitirá a los jugadores volver al mundo de METAL GEAR. Las naciones rivales están creando en secreto armas que podrían poner en peligro el futuro de la humanidad.",
        imagen: "/img/nacon.jpg",
        nombre: "Metal Gear Solid Delta",
        precio: 220,
        stock: 8,
    },
    {
        id: 3,
        categoria:"deportes",
        descripcion: "Maneja como las grandes estrellas con la experiencia de manejo más auténtica e inmersiva jamás vista en un título de F1®. Controla mejor la manera en que tu estilo personal de manejo influye en el rendimiento del coche y la estrategia de carrera.",
        imagen: "/img/f12024.jpg",
        nombre: "F1 2024",
        precio: 300,
        stock: 16,
    },
    {
        id: 4,
        categoria:"accion",
        descripcion: "TEKKEN 8 continúa la trágica saga de los linajes Mishima y Kazama y sus enfrentamientos rencorosos entre padre e hijo. En este último capítulo, Jin Kazama intentará desafiar a su destino enfrentándose a su padre Kazuya Mishima, causante de la guerra y la destrucción en todo el mundo.",
        imagen: "/img/tekken-8.png",
        nombre: "Tekken 8",
        precio: 260,
        stock: 14,
    }

]


const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(videojuegos)

        }, 2000)
    })
}




export { obtenerProductos }