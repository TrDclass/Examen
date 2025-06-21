import { useEffect, useState } from 'react'
import CarritoDeCompras from './components/CarritoDeCompras/CarritoDeCompras'
import Ordenes from './components/Ordenes/Ordenes'
import Modal from './components/Modal/Modal'
import './App.css'

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showOrdenes, setShowOrdenes] = useState(false)


  return (
    <>
      <h1>The Retro Store </h1>
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
        
        </tbody>
        </table>

        {showCart && <Modal onClose={() => setShowCart(false)} Children={CarritoDeCompras}></Modal>}
        {showOrdenes && <Modal onClose={() => setShowOrdenes(false)} Children={Ordenes}></Modal>}
    </>
  )
}

export default App
