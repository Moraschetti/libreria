"use strict";
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
exports.__esModule = true;
exports.Libro = void 0;
var padre_1 = require("./padre");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(pNombre, pAutor, pPrecio, pCantPag, pResumen, pGenero) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.cantidadDePag = pCantPag;
        _this.resumen = pResumen;
        _this.genero = pGenero;
        return _this;
    }
    Libro.prototype.getcantidadDePaginas = function () {
        return this.cantidadDePag;
    };
    Libro.prototype.getResumen = function () {
        return this.resumen;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    return Libro;
}(padre_1.Padre));
exports.Libro = Libro;
