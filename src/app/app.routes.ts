import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/auth/login/login.component';



export const routes: Routes = [
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'', component:HomeComponent, title: 'Home Page'},
    {path: 'gallery', component: GalleryComponent, title: 'Galería'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    { 
        path: 'admin', 
        // canActivate: [AuthGuard], // Descomenta si tienes un guard para proteger estas rutas
        children: [
          { 
            path: 'home-page', 
            loadComponent: () => import('./components/admin/home-page/home-page.component').then(m => m.HomePageComponent)
          },
          // Aquí puedes agregar más rutas para el área administrativa
          { path: '', redirectTo: 'home-page', pathMatch: 'full' }
        ]
      },
      { path: '**', redirectTo: '/login' } // Ruta por defecto
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes {};