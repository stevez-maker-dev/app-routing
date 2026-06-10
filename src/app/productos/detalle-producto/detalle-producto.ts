import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-detalle-producto',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css',
})
export class DetalleProducto implements OnInit {

  producto: Producto | undefined;

  private productos: Producto[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 85000, descripcion: 'Teclado mecánico con switches blue, retroiluminación RGB y diseño compacto.' },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 45000, descripcion: 'Mouse inalámbrico con receptor USB, 3 botones y autonomía de 12 meses.' },
    { id: 3, nombre: 'Monitor 24"', precio: 320000, descripcion: 'Monitor Full HD 1080p, panel IPS, 75Hz, tiempo de respuesta 5ms.' },
    { id: 4, nombre: 'Auriculares USB', precio: 60000, descripcion: 'Auriculares con micrófono incorporado, sonido envolvente y conexión USB.' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(p => p.id === id);
  }
}
