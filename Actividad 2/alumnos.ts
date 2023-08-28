class Persona {
    protected dni: number;
    protected nombre: string;
    protected edad: number;
    protected ocupacion: string;

    public constructor(dni: number, nombre: string, edad: number, ocupacion: string) {
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.ocupacion = ocupacion;
        
    }

}