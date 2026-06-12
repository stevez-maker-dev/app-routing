import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing-module';
import { DetalleProducto } from './detalle-producto/detalle-producto';
import { ListaProductos } from './lista-productos/lista-productos';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ListaProductos,
    DetalleProducto
  ],
})
export class ProductosModule {}
