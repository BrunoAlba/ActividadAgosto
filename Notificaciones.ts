//Actividad hecha en clases. Usaba de ejemplo-guía



interface Contactable {
    getEmail(): string;
    getTel(): string;
}

abstract class NotificacionService {
    abstract enviarNotificacion(mensaje: string, contacto?: Contactable): void;
}

class EmailNotificacionService extends NotificacionService {
    enviarNotificacion(mensaje: string, contacto?: Contactable): void {
        if (contacto) {
            console.log(`Se envia por correo a ${contacto.getEmail()}: ${mensaje}`);
        }
    }
}

class SmsNotificacionService extends NotificacionService {
    enviarNotificacion(mensaje: string, contacto?: Contactable): void {
        if (contacto) {
            console.log(`Se envia por sms a ${contacto.getTel()}: ${mensaje}`);
        }
    }
}

class Contacto implements Contactable {
    protected email: string;
    protected tel: string;

    constructor(email: string, tel: string) {
        this.email = email;
        this.tel = tel;
    }

    getEmail() {
        return this.email;
    }

    getTel() {
        return this.tel;
    }
}

class Usuario {
    protected nombreusuario: string;
    protected contacto?: Contacto;

    constructor(nombreusuario: string) {
        this.nombreusuario = nombreusuario;
    }

    getNombreUsuario() {
        return this.nombreusuario;
    }
    getContacto() {
        return this.contacto;
    }

    setContacto(contacto: Contacto) {
        this.contacto = contacto;
    }
}

class Empresa implements Contactable {
    getEmail(): string {
        return 'empresa@gmail.com';
    }
    getTel(): string {
        return '0888-265-4455';
    }
}

class Aplicacion {
    protected servicioNotificacion;
    constructor(servicioNotificacion: NotificacionService) {
        this.servicioNotificacion = servicioNotificacion;
    }

    ejecutar(usuario: Usuario) {
        this.servicioNotificacion.enviarNotificacion(`Hola ${usuario.getNombreUsuario()} se ejecuta tu APP`, usuario.getContacto());
    }
}

class AplicacionEmpresa {
    protected servicioNotificacion;
    constructor(servicioNotificacion: NotificacionService) {
        this.servicioNotificacion = servicioNotificacion;
    }
    ejecutar(empresa: Empresa): void {
        this.servicioNotificacion.enviarNotificacion(`Mensaje a empresa`, empresa);
    }
}


///      ----------------------------------------------
const not1 = new EmailNotificacionService();
const not2 = new SmsNotificacionService();

const usuario = new Usuario('ecavani');
const contacto1 = new Contacto('ecavani@gmail.com', '2284-555669');
usuario.setContacto(contacto1);

const aplicacion = new Aplicacion(not2);
aplicacion.ejecutar(usuario);


const aplicacionEmpresa = new AplicacionEmpresa(not1);
aplicacionEmpresa.ejecutar(new Empresa());

