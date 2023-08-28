var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Potenciable = /** @class */ (function () {
    function Potenciable(plusVida, plusAtaque, plusDefensa) {
        this.plusVida = plusVida;
        this.plusAtaque = plusAtaque;
        this.plusDefensa = plusDefensa;
    }
    return Potenciable;
}());
var Escudo = /** @class */ (function (_super) {
    __extends(Escudo, _super);
    function Escudo() {
        return _super.call(this, 0, 0, 30) || this;
    }
    Escudo.prototype.usarPotenciador = function (personaje) {
        personaje.setDefensa(personaje.getDefensa() + personaje.getDefensa() * this.plusDefensa / 100);
    };
    return Escudo;
}(Potenciable));
var Mazo = /** @class */ (function (_super) {
    __extends(Mazo, _super);
    function Mazo() {
        return _super.call(this, 0, 20, 0) || this;
    }
    Mazo.prototype.usarPotenciador = function (personaje) {
        personaje.setAtaque(personaje.getAtaque() + personaje.getAtaque() * this.plusAtaque / 100);
    };
    return Mazo;
}(Potenciable));
var Elixir = /** @class */ (function (_super) {
    __extends(Elixir, _super);
    function Elixir() {
        return _super.call(this, 50, 0, 0) || this;
    }
    Elixir.prototype.usarPotenciador = function (personaje) {
        //console.log(this.plusVida);
        personaje.setVida(personaje.getVida() + personaje.getVida() * this.plusVida / 100);
    };
    return Elixir;
}(Potenciable));
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, ataque, defensa) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Personaje.prototype.getAtaque = function () {
        return this.ataque;
    };
    Personaje.prototype.setAtaque = function (ataque) {
        this.ataque = ataque;
    };
    Personaje.prototype.getDefensa = function () {
        return this.defensa;
    };
    Personaje.prototype.setDefensa = function (defensa) {
        this.defensa = defensa;
    };
    Personaje.prototype.atacar = function () {
        console.log(this);
        console.log(this.nombre, " ataca por ", this.ataque);
        return this.ataque;
    };
    Personaje.prototype.defender = function (puntosAtaque) {
        this.vida -= (puntosAtaque - this.defensa);
        console.log(this.nombre, " defiende por ", this.defensa);
        console.log(this);
        if (this.vida <= 0) {
            console.log(this.nombre, " HA MUERTO!!!");
        }
    };
    return Personaje;
}());
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre) {
        return _super.call(this, nombre, 200, 300, 50) || this;
    }
    return Guerrero;
}(Personaje));
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre) {
        return _super.call(this, nombre, 100, 150, 300) || this;
    }
    return Mago;
}(Personaje));
var escudo = new Escudo();
var mazo = new Mazo();
var elixir = new Elixir();
var arturo = new Guerrero("Arturo");
var merlin = new Mago("Merlin");
console.log(arturo);
escudo.usarPotenciador(arturo);
console.log(arturo);
console.log(merlin);
elixir.usarPotenciador(merlin);
console.log(merlin);
arturo.defender(merlin.atacar());
console.log(arturo);
console.log(merlin);
