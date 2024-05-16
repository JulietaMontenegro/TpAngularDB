import { CommonModule } from '@angular/common';
import { Component,OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PlatosServicio } from '../../platos.service';
import { Plato } from '../../Plato';
import { Ingrediente } from '../../Ingrediente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plato',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './plato.component.html',
  styleUrl: './plato.component.css'
})



export class PlatoComponent {
  platos : Plato [] = [];
  ingredientes : Ingrediente [] = [];


 constructor (private servicioPlato : PlatosServicio ) {
  /*obtiene todos los platos del servicio*/ 
  //this.servicioPlato.getAllPlatos().subscribe((platos)=>{this.platos=platos}); /*obtiene todos los platos del servicio y los almacena en platos, la funcion es unicamente accesible xq se vinculo el servicio previamente*/ 
  // this.ingredientes = this.servicioPlato.obtenerTodosLosIngredientes();
}
  onSubmit() {
    console.log(this.ingredientes);
    throw new Error('Method not implemented.');
  }
  
  ngOnInit(){
    this.obtener();
  }

  obtener(){
    this.servicioPlato.getAllPlatos().subscribe((platos)=>{this.platos=platos});
    console.log(this.platos) /*obtiene todos los platos del servicio y los almacena en platos, la funcion es unicamente accesible xq se vinculo el servicio previamente*/ 
    this.ingredientes = this.servicioPlato.obtenerTodosLosIngredientes();
  }

  
}
