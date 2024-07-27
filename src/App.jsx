import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer.jsx"
import Main from "./components/Main/Main.jsx"
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


  return (
    <BrowserRouter>

      <NavBar />
      <Main />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
