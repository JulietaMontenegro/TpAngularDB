import { Injectable } from '@angular/core';
import { Plato } from './Plato';
import { Ingrediente } from './Ingrediente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,catchError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})



export class PlatosServicio {

    id: number | undefined;
    nombre: string | undefined;
    ingredientes: Ingrediente [] | undefined; 
    foto: string | undefined;

    private url = "http://localhost:3000/plato/"
  
    readonly httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
  
    constructor(private http: HttpClient) { }

    //Metodos de Platos


    getAllPlatos(){
      return this.http.get<Plato[]>(this.url);
    }
  
    agregarPlato(body:any): Observable<void>{
      return this.http.post<void>(this.url, body ,this.httpOptions);
    }
    updatePlato(id:number, body:any): Observable<void>{
      return this.http.put<void>(this.url + id , body,this.httpOptions );
    }
  
    deletePlato(id: number): Observable<void> {
      return this.http.delete<void>(this.url + id);
    }
    obtenerPlatoPorId(id: number){
      return this.http.get<Plato>(this.url + id);
    }
   
    //Metodos de Ingredientes

   
    getAllIngredientes(idPlato : number){
      return this.http.get(this.url + idPlato+ "/ingrediente");
    }
  
    agregarIngrediente(id:number, body:any): Observable<void>{
      return this.http.post<void>(this.url + id + "/ingrediente", body, this.httpOptions );
    }
    updateIngrediente(idPlato : number, nombreIngredinte:string, body:any){
      return this.http.post(this.url + idPlato + "/ingrediente/" + nombreIngredinte , body );
    }
  
    deleteIngrediente(idPlato : number, nombreIngredinte:string | undefined) {
      return this.http.delete(this.url + idPlato + "/ingrediente/" + nombreIngredinte);
    }
  

 // constructor () {}
  
 
  /* obtenerTodosLosPlatos(): Plato[] {
    return this.listaPlatos;
  }

  obtenerPlatosPorId(id: number): Plato | undefined {
    return this.listaPlatos.find(Plato => Plato.id === id);
  }*/

  obtenerTodosLosIngredientes(): Ingrediente[] {
    return this.listaIngredientes;
  }

  protected listaIngredientes: Ingrediente[] = [
    {
    
      nombre: "Carne picada",
      descripcion : "aaaaa",
      cantidad: 200,
    },
    {
      
      nombre: "Cebolla Caramelizada",
      descripcion : "aaaaa",
      cantidad: 80,
  },
  {
    
    nombre: "Pan de Hamburgesa",
    descripcion : "aaaaa",
    cantidad: 200,
},
{
  
  nombre: "Queso Cheddar",
  descripcion : "aaaaa",
  cantidad: 60,
}
  ]
 }  
 
 

