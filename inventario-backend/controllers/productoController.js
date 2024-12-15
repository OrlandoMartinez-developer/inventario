const db = require('../config/db');

const getProductos = async (req, res) => {
    try {
        const [productos] = await db.query('SELECT * FROM productos');
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, id_proveedor } = req.body;
        const [result] = await db.query(
            'INSERT INTO productos (nombre, descripcion, precio, stock, id_proveedor) VALUES (?, ?, ?, ?, ?)',
            [nombre, descripcion, precio, stock, id_proveedor]
        );
        res.json({ id: result.insertId, nombre, descripcion, precio, stock, id_proveedor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getProductos,
    createProducto,
};
