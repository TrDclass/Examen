import base from './base.js'

const endpoint = 'carrito'

const findAll = async () => await base.get(endpoint);
const removeItem = async (id) => await base.remove(`${endpoint}/${id}`);
const removeAll = async () => await base.remove(endpoint);
const addItem = async (payload) => await base.post(`${endpoint}/item`, payload);

const api = { findAll, removeItem, removeAll, addItem}

export default api;