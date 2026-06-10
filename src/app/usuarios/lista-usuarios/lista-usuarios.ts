import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

@Component({
  selector: 'app-lista-usuarios',
  imports: [CommonModule],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})
export class ListaUsuarios implements OnInit {

  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.usuarios = [
      { id: 1, nombre: 'Ana García', email: 'ana@email.com' },
      { id: 2, nombre: 'Carlos López', email: 'carlos@email.com' },
      { id: 3, nombre: 'María Fernández', email: 'maria@email.com' },
      { id: 4, nombre: 'Juan Pérez', email: 'juan@email.com' },
    ];
  }
}
