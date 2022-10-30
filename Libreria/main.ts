import { Libreria } from "./libreria";
import { Libro } from "./libro";
import { Revista } from "./revista";
import { Cliente } from "./cliente";
import { Padre } from "./padre";

let genero1: string = "fantasia";
let listagenero:string[] = [genero1];

let autor1: string = "George Martin";
let autor2: string  = "Stan Lee";
let autor3: string = "Steve Ditko";
let listaAutores: string[]= [autor1,autor2,autor3];

let libro1: Libro = new Libro("Fire and Blood",autor1,8900,1560,"",genero1);
let libro2: Libro = new Libro("Dance of Dragons",autor1,5600,590,"",genero1);
let listaLibros: Libro[] = [libro1,libro2];

let revista1: Revista = new Revista("The Amazing Spiderman",autor3,1300,56,1989);
let revista2: Revista = new Revista("The Avengers",autor2,1000,34,1994);
let revista3: Revista = new Revista("The X-Men",autor3,1800,54,2001);
let listaRevista: Revista[] = [revista1,revista2,revista3];

let compra1 = [revista1];
let compra2 = [libro2,revista3,libro1];
let compra3 = [listaLibros];
let listaDeCompras = [compra1,compra2,compra3];

let cliente1: Cliente = new Cliente("Matias","Moraschetti",34545455,"Ushuaia 456",[autor1],[genero1],0.1);
let cliente2: Cliente = new Cliente("xxxx","xxxx",11111,"xxxxx",listaAutores,listagenero,0.3);
let cliente3: Cliente = new Cliente("Ricardo","Guarino",1212122,"xxxx",[autor2],[genero1],0.15);
let listaClientes: Cliente[] = [cliente1,cliente2,cliente3];

let libreria1: Libreria = new Libreria(listaClientes,listaLibros,listaRevista);

//console.log(cliente1);
//console.log(cliente2);

libreria1.aplicarDescuento(cliente1,libro1);
console.log(libreria1);
