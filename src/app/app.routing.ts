import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "../app/pages/inicio/inicio.component";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../app/pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from "../app/components/navbar/navbar.component";
import { FooterComponent } from "../app/components/footer/footer.component";
const routes: Routes =[
  // {path: 'inicio', component: FooterComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'index',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  }, 
{
  path: '**',
  redirectTo: 'login'
}
];

@NgModule({
  imports: [
    CommonModule,
   
    FormsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  providers: [interceptorProvider],
  exports: [
  ],
})
export class AppRoutingModule { }
