import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./components/inicio/inicio').then(m => m.Inicio)
    },
    {
        path:'usuarios',
        loadChildren: () => 
            import('./usuarios/usuarios-module').then(m => m.UsuariosModule)
    },
    {
        path:'productos',
        loadChildren: () =>
            import('./productos/productos-module').then(m => m.ProductosModule)
    },
    {
        path:'**',
        redirectTo: ''
    }
];
