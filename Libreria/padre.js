"use strict";
exports.__esModule = true;
exports.Padre = void 0;
var Padre = /** @class */ (function () {
    function Padre(pNombre, pAutor, pPrecio) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    Padre.prototype.getNombre = function () {
        return this.nombre;
    };
    Padre.prototype.getAutor = function () {
        return this.autor;
    };
    Padre.prototype.getPrecio = function () {
        return this.precio;
    };
    return Padre;
}());
exports.Padre = Padre;
