
export class Padre{
    private nombre: string;
    private autor: string;
    private precio: number;

    constructor(pNombre:string,pAutor:string,pPrecio:number){
        this.nombre = pNombre;
        this.autor = pAutor;
        this.precio = pPrecio;
    }
    public getNombre() : string {
        return this.nombre;
    }
    
    public getAutor() : string {
        return this.autor;
    }
    
    public getPrecio() : number {
        return this.precio;
    }
    
}