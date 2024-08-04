import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Formulario from "./components/Formulario/Formulario.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import Carrito from "./components/Carrito/Carrito.jsx"



function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
        <Footer />
      </CartProvider>

    </BrowserRouter>
  )
}

export default App
