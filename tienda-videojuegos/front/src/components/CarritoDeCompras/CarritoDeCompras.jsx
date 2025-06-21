import { useEffect, useState } from "react"
import carritoApi from '../../api/carritoApi.js'
import ordenApi from '../../api/ordenApi.js'

const CarritoDeCompras = () => {
  const [itemsCarrito, setItemsCarrito] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const fetchItemsCarrito = async () => {
    const response = await carritoApi.findAll()
    setItemsCarrito(response.items)
  }

  const eliminarItem = async (id) => {
    await carritoApi.removeItem(id)
    fetchItemsCarrito()
  }

  useEffect(() => {
    fetchItemsCarrito()
  }, [])

  useEffect(() => {
    const total = itemsCarrito.reduce((acc, item) => acc + item.precio, 0)
    setSubtotal(total)
  }, [itemsCarrito])

  return (
    <>
      <h1>Cart</h1>
      <h3>Items:</h3>
      {itemsCarrito?.map((item) => (
        <div key={item.carritoId}>
          <span>🎮 {item.titulo} - {item.publisher} - ${item.precio}
            <button onClick={() => eliminarItem(item.carritoId)}>x</button>
          </span>
        </div>
      ))}
      <hr />
      <h4>Subtotal: $ {subtotal.toFixed(2)}</h4>
      <hr />
      <pre>Add your name:     <input type="text" style={{ width: 300 }} value={name} onChange={(e) => setName(e.target.value)} /></pre>
      <pre>And address:       <input type="text" style={{ width: 300 }} value={address} onChange={(e) => setAddress(e.target.value)} /></pre>
      <hr />
      <button >COMPLETE YOUR ORDER</button>
    </>
  )
}

export default CarritoDeCompras
