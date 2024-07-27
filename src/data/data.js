


const videojuegos = [
    {
        id: 0,
        categoria:"aventura",
        descripcion: "",
        imagen: "/img/finalFantasy.png",
        nombre: "Final Fantasy VII Rebirth",
        precio: 240,
        stock: 9,

    },
    {
        id: 1,
        categoria:"aventura",
        descripcion: "",
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
        descripcion: "",
        imagen: "/img/f12024.jpg",
        nombre: "F1 2024",
        precio: 300,
        stock: 16,
    },
    {
        id: 4,
        categoria:"deportes",
        descripcion: "",
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