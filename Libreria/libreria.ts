import { Cliente } from "./cliente";
import { Libro } from "./libro";
import { Padre } from "./padre";
import { Revista } from "./revista";

export class Libreria{
    protected clientes: Cliente[];
    protected libros: Libro[];
    protected revistas: Revista[];

    constructor(pClientes:Cliente[],pLibros:Libro[],pRevistas:Revista[]){
        this.clientes = pClientes;
        this.libros = pLibros;
        this.revistas = pRevistas;
    }
    
    public getClientes() : Cliente[] {
        return this.clientes;
    }
    setCliente(nuevoCliente:Cliente):void{
        this.clientes.push(nuevoCliente);
    }

    public getLibros() : Libro[] {
        return this.libros;
    }
    setLibro(nuevoLibro:Libro):void{
        this.libros.push(nuevoLibro);
    }

    setRevista(nuevaRevista:Revista):void{
        this.revistas.push(nuevaRevista);
    }

    aplicarDescuento(cliente:Cliente,articulo:Padre):number{
        let precioConDescuento:number = 0;
        precioConDescuento=articulo.getPrecio()*(1 - cliente.getDescuento());
        return precioConDescuento;
    } 
    
    consultarLibro(libros:Libro): void{
        console.log( `el libro consultado es ${this.libros}`);
    }
    
    consultarRevista(pRevistas:Revista[]):void{
        console.log(`la revista consultada es ${this.revistas}`)
    }
}

