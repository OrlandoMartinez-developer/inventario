export interface Producto {
    id_producto: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;
    id_proveedor: number;
    fecha_creacion: string;
}
