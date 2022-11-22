import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { MiOrganizacionSocialComponent } from '../../pages/mi-organizacion-social/mi-organizacion-social.component';
import { GenerarSolicitudComponent } from '../../pages/generar-solicitud/generar-solicitud.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { SolicitudesRechazadasComponent } from '../../pages/solicitudes-rechazadas/solicitudes-rechazadas.component';
import { RequisitosComponent } from '../../pages/requisitos/requisitos.component';
import { OrganizacionesSocialesComponent } from '../../pages/organizaciones-sociales/organizaciones-sociales.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    InicioComponent,
    UserProfileComponent,
    SolicitudesRechazadasComponent,
    MiOrganizacionSocialComponent,
    GenerarSolicitudComponent,
    RequisitosComponent,
    OrganizacionesSocialesComponent
  ]
})

export class AdminLayoutModule { }
