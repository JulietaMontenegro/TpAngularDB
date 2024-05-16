import { Ingrediente } from "./Ingrediente";
export interface Plato {
    id: number;
    nombre: string;
    descripcion: string;
    tipo :string;
    ingredientes: Ingrediente [] ; 
    foto: string;
    receta: string;
    
    
}
