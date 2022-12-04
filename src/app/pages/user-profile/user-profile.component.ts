import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  nombreUsuario = '';
  isLogged = false;
  correo ='';
  constructor(
    private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.correo = this.tokenService.getCorreo();
      this.nombreUsuario = this.tokenService.getUserName();
      console.log(this.tokenService)
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
      console.log("xddd")
    }
  }

}
