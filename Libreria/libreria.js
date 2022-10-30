"use strict";
exports.__esModule = true;
exports.Libreria = void 0;
var Libreria = /** @class */ (function () {
    function Libreria(pClientes, pLibros, pRevistas) {
        this.clientes = pClientes;
        this.libros = pLibros;
        this.revistas = pRevistas;
    }
    Libreria.prototype.getClientes = function () {
        return this.clientes;
    };
    Libreria.prototype.setCliente = function (nuevoCliente) {
        this.clientes.push(nuevoCliente);
    };
    Libreria.prototype.getLibros = function () {
        return this.libros;
    };
    Libreria.prototype.setLibro = function (nuevoLibro) {
        this.libros.push(nuevoLibro);
    };
    Libreria.prototype.setRevista = function (nuevaRevista) {
        this.revistas.push(nuevaRevista);
    };
    Libreria.prototype.aplicarDescuento = function (cliente, articulo) {
        var precioConDescuento = 0;
        precioConDescuento = articulo.getPrecio() * (1 - cliente.getDescuento());
        return precioConDescuento;
    };
    Libreria.prototype.consultarLibro = function (libros) {
        console.log("el libro consultado es ".concat(this.libros));
    };
    Libreria.prototype.consultarRevista = function (pRevistas) {
        console.log("la revista consultada es ".concat(this.revistas));
    };
    return Libreria;
}());
exports.Libreria = Libreria;
