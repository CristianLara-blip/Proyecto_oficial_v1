import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-mi-organizacion-social',
  templateUrl: './mi-organizacion-social.component.html',
  styleUrls: ['./mi-organizacion-social.component.css']
})
export class MiOrganizacionSocialComponent implements OnInit {
  roles: string[];
  isAdmin = false;

  constructor(private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

}
