import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlatoComponent } from './plato/plato.component';
import { app } from '../../server';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormulariosComponent } from './formularios/formularios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlatoComponent, CommonModule,FormulariosComponent,RouterLink],
  templateUrl: './app.component.html' ,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app1';
  constructor(private http: HttpClient){}

  callApiHandler(){
    this.http.get('https://www.example.com').subscribe((res)=>{},)
  }
}

