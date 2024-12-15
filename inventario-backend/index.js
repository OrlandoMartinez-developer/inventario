const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Importar rutas
const productoRoutes = require('./routes/productoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const movimientoRoutes = require('./routes/movimientoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/movimientos', movimientoRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
