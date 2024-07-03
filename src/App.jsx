import './App.css'
import Titulo from "./components/Titulo"
import NavBar from "./components/NavBar/NavBar"


function App() {



const saludo="hola"




  return (
  <div style={{backgroundColor: "black"}}>
    <h1>{saludo}</h1>
    <NavBar/>
    <Titulo/>

  </div>
  )
}

export default App
