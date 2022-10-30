import { Libreria } from "./libreria";
import { Libro } from "./libro";
import { Revista } from "./revista";
import { Padre } from "./padre";

export class Cliente{
    private nombre: string;
    private apellido: string;
    private dni: number;
    private direccion: string;
    private listaAutorFav: string[];
    private listaGeneroFav: string[];
    private descuento: number;

    constructor(pNombre:string,pApellido:string,pDni:number,pDireccion:string,pListaAutor:string[],pListaGenero:string[],pDescuento: number){
         this.nombre = pNombre;
         this.apellido = pApellido;
         this.dni = pDni;
         this.direccion = pDireccion; 
         this.listaAutorFav = pListaAutor;
         this.listaGeneroFav = pListaGenero;
         this.descuento = pDescuento;
    }
    
    public getNombre() : string {
        return this.nombre
    }
    
    public getApellido() : string {
        return this.apellido;
    }
    
    public getDni() : number {
        return this.dni;
    }
    
    public getDireccion() : string {
        return this.direccion;
    }

    public getDescuento() : number {
        return this.descuento;
    }
    
    public getAutoresFavoritos():string[]{
        return this.listaAutorFav;
    }
    
    public getGeneroFavoritos() : string[] {
        return this.listaGeneroFav;
    }
    
    
    
    
    

}