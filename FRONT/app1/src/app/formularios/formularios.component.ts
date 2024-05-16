import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
//QUE GRANDE CIRRI 
//TORETE 

import { RouterOutlet } from '@angular/router';
import { PlatoComponent } from '../plato/plato.component';
import { PlatosServicio } from '../../platos.service';
import { Ingrediente } from '../../Ingrediente';
import { Plato } from '../../Plato';
import { FormsModule } from '@angular/forms';
import { randomInt } from 'crypto';
import { FormBuilder,FormGroup } from '@angular/forms';
import { log } from 'console';
import { NG_ASYNC_VALIDATORS, NgControl,NG_VALIDATORS,NG_VALUE_ACCESSOR,NgControlStatus,NgForm,NgModelGroup,NgSelectOption,ɵNgSelectMultipleOption } from '@angular/forms';
//QUE GRANDE CIRRI 
//TORETE 


@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule,RouterOutlet,PlatoComponent, FormsModule ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})



export class FormulariosComponent {
  filtroIngredientes: string ="";
  ingredientes : Ingrediente [] = [];
  servicio : PlatosServicio;
  cantIngredientes: number[] = [1];
  buscar: boolean = false;
  platoUpdateForm: Plato ={ id:0, nombre: '',descripcion:"", tipo:"", ingredientes: new Array<Ingrediente> , foto: "", receta: "" }
  plato: Plato = { id:0, nombre: '',descripcion:"", tipo:"", ingredientes: new Array<Ingrediente> , foto: "", receta: "" }
  ingredientesSeleccionados: Ingrediente[] = [];
  ingredientesSeleccionados2: Ingrediente[] = [];
  ingredientesPlatoUpdate: Ingrediente[] = [];
  resultados: Ingrediente [] = [];
   ingrediente: Ingrediente = {
    nombre: "",
    descripcion: "",
    cantidad: 0
};
//QUE GRANDE CIRRI 
//TORETE 

 



  constructor ( ) {
    this.servicio = inject(PlatosServicio)   /*obtiene todos los platos del servicio obtiene todos los platos del servicio y los almacena en platos, la funcion es unicamente accesible xq se vinculo el servicio previamente*/ 
   this.ingredientes = this.servicio.obtenerTodosLosIngredientes();
   
  }
/*  public appendElement(): void {  
    
    this.cantIngredientes = [...this.cantIngredientes, this.cantIngredientes.length + 1 ];
      this.ingredientesSeleccionados.push
      console.log(this.ingredientesSeleccionados)
      console.log(this.ingredientesSeleccionados[1])
      console.log(this.plato.ingredientes[1])
      this.ingredientesSeleccionados = []; // Limpia los ingredientes seleccionados
  */


  filtrarResultados(text: string) {
    console.log("aaaa")
    if (!text) {
      this.resultados = this.ingredientes;
      return;
    }
    this.resultados = this.ingredientes.filter(
      ingredienteActual => ingredienteActual?.nombre.toLowerCase().includes(text.toLowerCase())
    );
  }
  

  onSubmit(texto:string) {
    let body : string;
    this.plato.ingredientes.push(...this.ingredientesSeleccionados);
    this.ingredientesSeleccionados = [];
    this.filtrarResultados(texto);
    //body = "{" + "platos" + ":" + "[" +  JSON.stringify(this.plato) +   "]" + "},"
    //console.log(JSON.stringify(body));
    //this.servicio.agregarPlato(body);
    
     // Construir el objeto plato y convertirlo a JSON
     const platoJSON = JSON.stringify(this.plato)
     // Construir el cuerpo del mensaje JSON eliminando las comillas adicionales
     body = `{"platos": ${platoJSON}}`;
     // Eliminar el caracter "/" del string
     body = body.replace(/\//g, '');
     console.log(body);
     this.servicio.agregarPlato(body).subscribe((data: any) => {
      if (data){
        console.log(data)
    }  
  });
}  
    borrarPlato(){
      let id =this.plato.id;
      console.log(id);
      this.servicio.deletePlato(id).subscribe((data: any) => {
        if (data){
          console.log("Se ha borrado exitosamente")
      }  
    });
  }  



    agregarIngrediente(ingrediente: Ingrediente){
      if(!this.ingredientesSeleccionados.includes(ingrediente)){
      this.ingredientesSeleccionados.push(ingrediente);
      console.log(this.ingredientesSeleccionados);
    }
  }

  agregarIngrediente2(ingrediente: Ingrediente){
    if(!this.ingredientesSeleccionados2.includes(ingrediente)){
    this.ingredientesSeleccionados2.push(ingrediente);
    console.log(this.ingredientesSeleccionados2);
  }
}

  removeIngrediente(ingrediente: Ingrediente) {
    const index = this.ingredientesSeleccionados.indexOf(ingrediente);
    if (index!== -1) {
      this.ingredientesSeleccionados.splice(index, 1);
      console.log(this.ingredientesSeleccionados);
    }
  }
  removeIngrediente2(ingrediente: Ingrediente) {
    const index = this.ingredientesSeleccionados2.indexOf(ingrediente);
    if (index!== -1) {
      this.ingredientesSeleccionados2.splice(index, 1);
      console.log(this.ingredientesSeleccionados2);
    }
  }
  addIng(){
    const id = this.plato.id
    "She said, \"You deserve a treat!\" ";  
   
    const data = "{ \"ingredientes\" " +":"+ JSON.stringify(this.ingrediente) + "}"
    console.log(data)
    this.servicio.agregarIngrediente(id,data).subscribe((data: any) => {
      if (data){
        console.log("agregado el ingrediente")
    }  
  });
}  ;

updatePlato(texto: string){
let body : string;
this.plato.ingredientes.push(...this.ingredientesSeleccionados2);
this.ingredientesSeleccionados2 = [];
this.filtrarResultados(texto);
 const platoJSON = JSON.stringify(this.plato)
 // Construir el cuerpo del mensaje JSON eliminando las comillas adicionales
 body = `{"platos": ${platoJSON}}`;
 // Eliminar el caracter "/" del string
 body = body.replace(/\//g, '');

 console.log(body);
 this.servicio.updatePlato(this.plato.id,body).subscribe((data: any) => {
  if (data){
    console.log(data)
}  
});
}
buscarPlato(id: number){

this.servicio.obtenerPlatoPorId(id).subscribe(plato=>{this.platoUpdateForm=plato;
  this.buscar= true;
  console.log(this.platoUpdateForm);
  this.ingredientesPlatoUpdate.push(...plato.ingredientes);
});



}
  
    
   /* onIngredientSelect(event: Event, ingrediente: Ingrediente): void {
      const checkbox = event.target as HTMLInputElement;
      if (checkbox.checked) {
        this.ingredientesSeleccionados.push(ingrediente);
      } else {
        const index = this.ingredientesSeleccionados.indexOf(ingrediente);
        if (index > -1) {
          this.ingredientesSeleccionados.splice(index, 1);
        }
      }
    }*/
  }
  
