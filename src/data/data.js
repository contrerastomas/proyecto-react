


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
    },
    {
        id: 5,
        categoria:"deportes",
        descripcion: "Lleva tus partidos al siguiente nivel con la tecnología inmersiva ProPLAY™, que transforma de manera directa las imágenes de la NBA en gameplay interactivo. Acércate a tus estrellas favoritas de la NBA y sumérgete en los momentos más decisivos, porque ProPLAY™ hace posible la experiencia NBA más auténtica hasta la fecha.",
        imagen: "/img/NBA2K25.jpg",
        nombre: "NBA 2K25",
        precio: 460,
        stock: 14,
    },
    {
        id: 6,
        categoria:"deportes",
        descripcion: "NHL 24 es una simulación de hockey sobre hielo y la última entrega de la serie de videojuegos NHL. El juego presenta una serie de nuevas mecánicas de juego diseñadas para mejorar el realismo y la estrategia.",
        imagen: "/img/nhl-24.jpg",
        nombre: "NHL 24",
        precio: 260,
        stock: 14,
    },
    {
        id: 7,
        categoria:"deportes",
        descripcion: "Comienza tu travesía en UFC 5 con la Ultimate Edition, con más contenido que nunca, incluidos alter ego del Salón de la Fama, 15 combatientes más, 3 leyendas y mucho más.",
        imagen: "/img/EA-Sports-UFC-5.jpg",
        nombre: "EA Sports UFC 5",
        precio: 260,
        stock: 14,
    },
    {
        id: 8,
        categoria:"deportes",
        descripcion: "Todo el poder de la franquicia Monster Jam está listo para aterrizar en tus manos, con una nueva y rompedora experiencia arcade todoterreno. Prepárate para correr a través de tres biomas diferentes y realizar tus mejores trucos conduciendo los camiones Monster Jam más icónicos de la historia.",
        imagen: "/img/MonsterJam.jpg",
        nombre: "Monster Jam Showdown Day One Edition",
        precio: 260,
        stock: 14,
    }
    ,{
        id: 9,
        categoria:"accion",
        descripcion: "El tiempo lo revela todo Piérdete en el distópico mundo del Nueva York de 2329, donde la inmortalidad tiene un precio que alguien debe pagar. Tras una experiencia cercana a la muerte, el detective James Karra acepta un caso no oficial con la única ayuda de una joven enlace de la policía, Sara Kai.",
        imagen: "/img/NobodyWantsToDie.jpg",
        nombre: "Nobody Wants to Die",
        precio: 360,
        stock: 6,
    },
    {
        id: 10,
        categoria:"accion",
        descripcion: "S.T.A.L.K.E.R. 2: Heart of Chornobyl es el nuevo producto de la legendaria franquicia creada por GSC Game World. Se trata de un triple A de supervivencia en primera persona con una historia no lineal ambientada en un entorno siniestro de la postapocalíptica Zona de Exclusión de Chernóbil.",
        imagen: "/img/stalker.jpg",
        nombre: "S.T.A.L.K.E.R. 2",
        precio: 260,
        stock: 14,
    },
    {
        id: 11,
        categoria:"accion",
        descripcion: "Rise of the Rōnin nos lleva a la segunda mitad del siglo XIX, pleno ocaso del Japón feudal, cuando el shogunato Tokugawa ya había empezado a lidiar con la entrada de los “barcos negros” norteamericanos, llegada con la que se terminó a la fuerza el aislamiento de siglos del archipiélago nipón y a la fuerza se comenzó el comercio con el mundo exterior.",
        imagen: "/img/rise-of-the-ronin.jpg",
        nombre: "Rise of the Rōnin",
        precio: 260,
        stock: 14,
    }
    ,{
        id: 12,
        categoria:"aventura",
        descripcion: "Un compás ctónico llama desde el más allá y convierte a los festivaleros en zombis voraces. Atraídos por una enigmática advertencia, los jugadores deben explorar las ruinas del SoLA para ponerle fin a esta amenaza sobrenatural.",
        imagen: "/img/deadIsland.jpg",
        nombre: "Dead Island 2",
        precio: 260,
        stock: 14,
    },
    {
        id: 13,
        categoria:"aventura",
        descripcion: "En un futuro no muy lejano, América ha sido devastada por una fuerza imparable llamada Miasma. Conoce a Elvis, un joven que llego al pueblo minero de Sedentary cuando era un bebé. Su madre lo deja a cargo de su hermano robótico junto con un guante misterioso con el que puede controlar el Miasma.",
        imagen: "/img/MiasmaChronicles.jpg",
        nombre: "Miasma Chronicles",
        precio: 260,
        stock: 14,
    }
    ,{
        id: 14,
        categoria:"aventura",
        descripcion: "Nacerás en un mundo nuevo en el que la humanidad biológica se ha extinguido, pero donde permanece la cultura humana en una ciudad de robots. En esta aventura tan alucinante vas a descubrir una megaestructura misteriosa que oculta grandes poderes.",
        imagen: "/img/The_Talos_Principle_2.jpg",
        nombre: "Tekken 8",
        precio: 260,
        stock: 14,
    }



]


const obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(videojuegos)

        }, 1000)
    })
}




export { obtenerProductos }