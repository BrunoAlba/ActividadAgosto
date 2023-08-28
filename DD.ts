//Actividad hecha en clases. Usaba de ejemplo-guía

abstract class Potenciable {
    protected plusVida: number;
    protected plusAtaque: number;
    protected plusDefensa: number;

    constructor(plusVida: number, plusAtaque: number, plusDefensa: number) {
        this.plusVida = plusVida;
        this.plusAtaque = plusAtaque;
        this.plusDefensa = plusDefensa;
    }

    abstract usarPotenciador(personaje: Personaje): void;
}


class Escudo extends Potenciable {
    constructor() {
        super(0, 0, 30);
    }

    public usarPotenciador(personaje: Personaje): void {
        personaje.setDefensa(personaje.getDefensa() + personaje.getDefensa() * this.plusDefensa / 100);
    }
}

class Mazo extends Potenciable {
    constructor() {
        super(0, 20, 0);
    }

    public usarPotenciador(personaje: Personaje): void {
        personaje.setAtaque(personaje.getAtaque() + personaje.getAtaque() * this.plusAtaque / 100);
    }
}

class Elixir extends Potenciable {
    constructor() {
        super(50, 0, 0);
    }

    public usarPotenciador(personaje: Personaje): void {
        //console.log(this.plusVida);
        personaje.setVida(personaje.getVida() + personaje.getVida() * this.plusVida / 100);
    }
}

class Personaje {
    protected nombre: string;
    protected vida: number;
    protected ataque: number;
    protected defensa: number;

    constructor(nombre: string, vida: number, ataque: number, defensa: number) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getVida(): number {
        return this.vida;
    }
    public setVida(vida: number): void {
        this.vida = vida;
    }
    public getAtaque(): number {
        return this.ataque;
    }
    public setAtaque(ataque: number): void {
        this.ataque = ataque;
    }
    public getDefensa(): number {
        return this.defensa;
    }
    public setDefensa(defensa: number): void {
        this.defensa = defensa;
    }
    public atacar(): number {
        console.log(this);
        console.log(this.nombre, " ataca por ", this.ataque);
        return this.ataque;
    }
    public defender(puntosAtaque: number) {
        this.vida -= (puntosAtaque - this.defensa);
        console.log(this.nombre, " defiende por ", this.defensa);
        console.log(this);
        if (this.vida <= 0) {
            console.log(this.nombre, " HA MUERTO!!!");
        }
    }
}

class Guerrero extends Personaje {
    constructor(nombre: string) {
        super(nombre, 200, 300, 50);
    }
}

class Mago extends Personaje {
    constructor(nombre: string) {
        super(nombre, 100, 150, 300);
    }
}

let escudo: Escudo = new Escudo();
let mazo: Mazo = new Mazo();
let elixir: Elixir = new Elixir();

let arturo: Guerrero = new Guerrero("Arturo");
let merlin: Mago = new Mago("Merlin");

console.log(arturo);
escudo.usarPotenciador(arturo);
console.log(arturo);

console.log(merlin);
elixir.usarPotenciador(merlin);
console.log(merlin);

arturo.defender(merlin.atacar());
console.log(arturo);
console.log(merlin);