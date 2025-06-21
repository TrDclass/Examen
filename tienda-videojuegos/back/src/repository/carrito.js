import model from '../models/carrito.js'

let carrito = {...model};

const findAll = () => {
    return carrito;
}

const addItem = (item) => {
    item.carritoId = carrito.items.length + 1;
    carrito.items.push(item);
    
    return item;
}

const remove = (carritoId) => {
    const index = carrito.items.findIndex(item => item.carritoId == carritoId);

    if (index > -1) {
        carrito.items.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const removeAll = () => {
    carrito.items = [];
    return true;
}

const repository = { findAll, addItem, remove,removeAll }

export default repository;