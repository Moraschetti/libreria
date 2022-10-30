import { Cliente } from "./cliente";
import { Libreria } from "./libreria";
import { Padre } from "./padre";

export class Revista extends Padre{
    private numero: number;
    private anio: number

    constructor(pNombre:string,pAutor:string,pPrecio:number,pNumero:number,pAnio:number){
     super(pNombre,pAutor,pPrecio);
        this.numero = pNumero;
        this.anio = pAnio;
    }
    
    public getNumero() : number {
        return this.numero;
    }

    
    public getAnio() : number {
        return this.anio;
    }
    
    
}