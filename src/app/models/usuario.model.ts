export interface Usuario {
    id_usuario: number;
    nombre: string;
    email: string;
    contraseña?: string; // No se debería manejar la contraseña directamente por seguridad.
    tipo: 'admin' | 'normal';
    fecha_creacion: string; // Timestamp en formato ISO.
}
