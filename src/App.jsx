import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer.jsx"
import Main from "./components/Main/Main.jsx"
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"

function App() {


  return (
    <div className="contenedor">

        <NavBar />
        <Main />
        <ItemListContainer/>
        <ItemDetailContainer/>
        <Footer />

    </div>
  )
}

export default App
