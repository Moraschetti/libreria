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
exports.Revista = void 0;
var padre_1 = require("./padre");
var Revista = /** @class */ (function (_super) {
    __extends(Revista, _super);
    function Revista(pNombre, pAutor, pPrecio, pNumero, pAnio) {
        var _this = _super.call(this, pNombre, pAutor, pPrecio) || this;
        _this.numero = pNumero;
        _this.anio = pAnio;
        return _this;
    }
    Revista.prototype.getNumero = function () {
        return this.numero;
    };
    Revista.prototype.getAnio = function () {
        return this.anio;
    };
    return Revista;
}(padre_1.Padre));
exports.Revista = Revista;
