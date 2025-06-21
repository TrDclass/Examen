import { useEffect, useState } from 'react'
import CarritoDeCompras from './components/CarritoDeCompras/CarritoDeCompras'
import Ordenes from './components/Ordenes/Ordenes'
import Modal from './components/Modal/Modal'
import videojuegosApi from './api/videogameApi.js'
import carritoApi from './api/carritoApi.js'
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showOrdenes, setShowOrdenes] = useState(false)
  const [videojuegos, setVideojuegos] = useState([])
  const agregarAlCarrito = async (juego) => {
    await carritoApi.addItem(juego)
    alert(`"${juego.titulo}" añadido al carrito`)
  }

  useEffect(() => {
    const cargarVideojuegos = async () => {
      const data = await videojuegosApi.findAll()
      setVideojuegos(data.items || []) 
    }
    cargarVideojuegos()
  }, [])

  return (
    <>
      <h1>The Retro Store</h1>
      <p>This is some stuff I have for sale. Feel free to add it to your cart.</p>
      <button onClick={() => setShowCart(!showCart)}>Go to Cart</button>
      &nbsp;<button onClick={() => setShowOrdenes(!showOrdenes)}>Go to Orders</button>
      <h4>Items for sale:</h4>
      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Console</th>
            <th>Publisher</th>
            <th>Year</th>
            <th>Price</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {videojuegos.map((juego) => (
            <tr key={juego.id}>
              <td>
                <img src={juego.cover} alt={juego.titulo} width="60" />
              </td>
              <td>{juego.titulo}</td>
              <td>{juego.consola}</td>
              <td>{juego.publisher}</td>
              <td>{juego.año}</td>
              <td>${juego.precio}</td>
              <td>{juego.pais}</td>
              <td>
              <button onClick={() => agregarAlCarrito(juego)}>Añadir al carrito</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCart && <Modal onClose={() => setShowCart(false)} Children={CarritoDeCompras} />}
      {showOrdenes && <Modal onClose={() => setShowOrdenes(false)} Children={Ordenes} />}
    </>
  )
}

export default App
