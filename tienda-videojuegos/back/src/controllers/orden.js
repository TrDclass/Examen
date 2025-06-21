import repository from "../repository/orden.js";

const findAll = (req, res) => {
    const carrito = repository.findAll();

    return res.status(200).json(carrito);
}

const addItem = (req, res) => {
    const album = req.body;
    const ordenCreated = repository.addItem(album);
    return res.status(201).json(ordenCreated)
}

const remove = (req, res) => {
    const id = req.params.id;

    const result = repository.remove(id);

    return res.status(200).json(result);
}

const removeAll = (req, res) => {
    const resp = repository.removeAll();

    return res.status(200).json(resp);
}

const controller = { findAll, addItem, remove, removeAll }

export default controller;