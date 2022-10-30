"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(pNombre, pApellido, pDni, pDireccion, pListaAutor, pListaGenero, pDescuento) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
        this.direccion = pDireccion;
        this.listaAutorFav = pListaAutor;
        this.listaGeneroFav = pListaGenero;
        this.descuento = pDescuento;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getApellido = function () {
        return this.apellido;
    };
    Cliente.prototype.getDni = function () {
        return this.dni;
    };
    Cliente.prototype.getDireccion = function () {
        return this.direccion;
    };
    Cliente.prototype.getDescuento = function () {
        return this.descuento;
    };
    Cliente.prototype.getAutoresFavoritos = function () {
        return this.listaAutorFav;
    };
    Cliente.prototype.getGeneroFavoritos = function () {
        return this.listaGeneroFav;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
