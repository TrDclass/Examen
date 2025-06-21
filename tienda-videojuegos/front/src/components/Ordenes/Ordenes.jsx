import { useEffect, useState } from 'react'
import ordenesApi from '../../api/ordenApi.js'
const Ordenes = () => {

    const [ordenes, setOrdenes] = useState([])

    const fetchOrdenes = async () => {
        const response = await ordenesApi.findAll()
        setOrdenes(response)
    }

    const onLoad = async () => {
        fetchOrdenes();
    }

    useEffect(() => {
        onLoad();
    },[])

    return (
        <>
            <h1>Orders</h1>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Total Items</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Items</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordenes.map((orden) => {
                            return <tr key={orden.id}>
                                        <td>{orden.id}</td>
                                        <td>{orden.items.length}</td>
                                        <td>{orden.name}</td>
                                        <td>{orden.address}</td>
                                        <td><ul>
                                            { orden.items.map(i => <li key={i.id}>{i.titulo}</li>)
                                            }</ul>
                                        </td>
                                        <td>{orden.subtotal}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Ordenes