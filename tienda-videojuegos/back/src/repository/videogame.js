import videojuegos from '../models/videogame.js'

let items = [...videojuegos]; // es un arreglo directamente

const findAll = () => {
    return { items }; // devolvemos un objeto con items
}

const addItem = (item) => {
    item.carritoId = items.length + 1;
    items.push(item);
    return item;
}

const remove = (carritoId) => {
    const index = items.findIndex(item => item.carritoId == carritoId);
    if (index > -1) {
        items.splice(index, 1);
        return true;
    }
    return false;
}

const removeAll = () => {
    items = [];
    return true;
}

const repository = { findAll, addItem, remove, removeAll }

export default repository;
