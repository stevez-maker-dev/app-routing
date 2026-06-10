import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/inicio/inicio').then(m => m.Inicio)
    },
    {
        path:'usuarios',
        loadComponent: () => 
            import('./usuarios/lista-usuarios/lista-usuarios').then(m => m.ListaUsuarios)
    },
    {
        path:'productos',
        loadComponent: () =>
            import('./productos/lista-productos/lista-productos').then(m => m.ListaProductos)
    },
    {
        path:'productos/:id',
        loadComponent: () =>
            import('./productos/detalle-producto/detalle-producto').then(m => m.DetalleProducto)
    },
    {
        path:'**',
        redirectTo: ''
    }
];
