import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: Producto[] = [];

  ngOnInit(): void {
    this.productos = [
      { id: 1, nombre: 'Teclado mecánico', precio: 85000 },
      { id: 2, nombre: 'Mouse inalámbrico', precio: 45000 },
      { id: 3, nombre: 'Monitor 24"', precio: 320000 },
      { id: 4, nombre: 'Auriculares USB', precio: 60000 },
    ];
  }
}
