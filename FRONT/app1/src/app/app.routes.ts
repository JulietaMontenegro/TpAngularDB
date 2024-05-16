import { Routes } from '@angular/router';
import { PlatoComponent } from './plato/plato.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { RecetasComponent } from './recetas/recetas.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


export const routes: Routes = [
{ path: "plato", component:PlatoComponent },
{ path: "formulario", component:FormulariosComponent },
{ path: "recetas/:id", component:RecetasComponent }

];
