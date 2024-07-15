import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer.jsx"
import Main from "./components/Main/Main.jsx"
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer.jsx"


function App() {


  return (
    <div className="contenedor">

        <NavBar />
        <Main />
        <ItemListContainer/>
        <Footer />

    </div>
  )
}

export default App
