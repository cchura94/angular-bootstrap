import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'publicaciones',
    component: PublicacionComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'ingresar',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
