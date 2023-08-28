/**
 * Que vende un kiosco
 */
class Kiosco { 
    private articulosEnVenta: ProductoEnVenta [];

    public constructor () {

    }
}

class ProductoEnVenta {
    private nombre: string;
    private marca: string;
    private precio: number;
    private cantidad: number;

    public constructor (nombre: string, marca: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

