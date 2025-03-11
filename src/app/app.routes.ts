import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';



export const routes: Routes = [
    // {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'', component:HomeComponent, title: 'Home Page'},
    {path: 'gallery', component: GalleryComponent, title: 'Home Gallery'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes {};