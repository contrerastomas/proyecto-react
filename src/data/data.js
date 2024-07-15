


const videojuegos=[
{
id:0,
categoria:"videojuegos",
descripcion:"",
imagen:"/img/finalFantasy.png",
nombre:"Final Fantasy VII Rebirth",
precio:250,
stock:7,

},
{
    id:1,
    categoria:"videojuegos",
    descripcion:"",
    imagen:"/img/assassincred.png",
    nombre:"Assassin's Creed Shadows",
    precio:220,
    stock:5,
    
}

]

const electronica=[

]

const obtenerProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(videojuegos)

        },2000)
    })
}

export default obtenerProductos