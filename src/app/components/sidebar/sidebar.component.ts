import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'inicio', title: 'inicio',  icon: 'ni-tv-2 text-secondary', class: '*ngIf="isLogged"' },
    { path: 'mi-organizacion-social', title: 'Mi organización social',  icon:'ni-planet text-secondary', class: '*ngIf="isLogged"' },
    { path: 'generar-solicitud', title: 'Generar solicitud',  icon:'ni-pin-3 text-secondary', class: '*ngIf="isLogged"' },
    { path: 'solicitudes-rechazadas', title: 'Solicitudes rechazadas',  icon:'ni-bullet-list-67 text-secondary', class: '*ngIf="isLogged"' },
    { path: 'requisitos', title: 'Ver requisitos',  icon:'ni-bullet-list-67 text-secondary', class: '*ngIf="isLogged"' },
    { path: 'organizaciones-sociales', title: 'Ver organizaciones sociales',  icon:'ni-bullet-list-67 text-secondary', class: '*ngIf="isLogged"' },
    { path: 'login', title: 'Login',  icon:'ni-key-25 text-secondary', class: '*ngIf="isLogged"' },
    { path: 'register', title: 'Register',  icon:'ni-circle-08 text-secondary', class: '*ngIf="isLogged"' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(ROUTES)
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
