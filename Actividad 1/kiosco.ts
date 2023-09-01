/**
 * Que vende un kiosco
 */
class Kiosco {
    private articulosEnVenta: ProductoEnVenta[];
    private articulosVendidos: ProductoEnVenta[];

    public constructor() {
        this.articulosEnVenta = [];
        this.articulosVendidos = [];
    }

    public cargarProducto(productos: ProductoEnVenta[]): void {
        this.articulosEnVenta.push(...productos);
    }

    /**
     * Preguntar.
     */
    public venderProducto(nombre: string, cantidad: number): void {
        const producto = this.articulosEnVenta.find(item => item.nombre === nombre);

        if (producto && producto.cantidad >= cantidad) {
            producto.cantidad -= cantidad;
            this.registrarVenta(producto, cantidad);
        } else {
            console.log("No hay tantos en venta.");
        }
    }

    /**
     * Encontrar la vuelta sin que sea "public"
     */
    private registrarVenta(producto: ProductoEnVenta, cantidad: number): void {
        const productoVendido = new ProductoEnVenta(producto.nombre, producto.marca, producto.precio, cantidad);
        this.articulosVendidos.push(productoVendido);
    }

    public mostrarProductosVendidos(): void {
        console.log("Productos vendidos:");
        for (const producto of this.articulosVendidos) {
            console.log(`Nombre: ${producto.nombre}, Marca: ${producto.marca}, Cantidad vendida: ${producto.cantidad}`);
        }
    }
}

class ProductoEnVenta {
    private nombre: string;
    private marca: string;
    private precio: number;
    private cantidad: number;

    public constructor(nombre: string, marca: string, precio: number, cantidad: number) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

// Ejemplo de uso
const kiosco = new Kiosco();

const productosAVender = [
    new ProductoEnVenta("Galletas", "MarcaA", 2.5, 50),
    new ProductoEnVenta("Refresco", "MarcaB", 1.8, 30)
];

kiosco.cargarProducto(productosAVender);

kiosco.venderProducto("Galletas", 10);
kiosco.venderProducto("Refresco", 5);

kiosco.mostrarProductosVendidos();