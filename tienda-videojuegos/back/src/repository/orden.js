import ordenes from '../models/orden.js'

let listaOrdenes = [...ordenes] // ← usa una lista propia

const findAll = () => {
  return listaOrdenes
}

const addItem = (orden) => {
  orden.id = listaOrdenes.length + 1
  listaOrdenes.push(orden)
  return orden
}

const remove = (id) => {
  const index = listaOrdenes.findIndex(o => o.id == id)
  if (index > -1) {
    listaOrdenes.splice(index, 1)
    return true
  }
  return false
}

const removeAll = () => {
  listaOrdenes = []
  return true
}

const repository = { findAll, addItem, remove, removeAll }

export default repository
