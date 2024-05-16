import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { PlatosServicio } from '../../platos.service';
import { Plato } from '../../Plato';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent implements OnInit{
  router: Router = inject(Router);
  plato: Plato | undefined;
  


  constructor(private route: ActivatedRoute, private servicioPlato : PlatosServicio){}

  ngOnInit(): void {
    const idPlato = parseInt(this.route.snapshot.params['id'], 10);
    this.servicioPlato.obtenerPlatoPorId(idPlato).subscribe(
      response => {
        this.plato = this.eliminarLlaveExterna(response);
      },
      error => {
        console.error('Error al obtener materia:', error);
      }
    );
  }

  eliminarLlaveExterna(objeto: any): any {
    const llaveExterna = Object.keys(objeto)[0];
    return objeto[llaveExterna]; 
  }
 
  }


