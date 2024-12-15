export interface Movimiento {
    id_movimiento: number;
    id_producto: number;
    id_usuario: number;
    tipo: 'entrada' | 'salida';
    cantidad: number;
    fecha_movimiento: string;
}
