import { Libreria } from "./libreria";
import { Cliente } from "./cliente";
import { Padre } from "./padre";

export class Libro extends Padre{
    private cantidadDePag: number;
    private resumen: string;
    private genero: string;

    constructor(pNombre:string,pAutor:string,pPrecio:number,pCantPag:number,pResumen:string,pGenero:string){
         super(pNombre,pAutor,pPrecio);
         this.cantidadDePag = pCantPag;
         this.resumen = pResumen;
         this.genero = pGenero;
    }

public getcantidadDePaginas() : number {
    return this.cantidadDePag;
}

public getResumen() : string {
    return this.resumen;
}

public getGenero() : string {
    return this.genero;
}






}