import { fileURLToPath } from 'node:url';
import { AlertService } from './../../resources/services/AlertService';
import { LoginService } from './../../../../../angular-course-carsales/src/app/resources/services/login.service';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RequestLogin } from '../../resources/models/RequestLogin';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet, RouterOutletContract } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private loginService: LoginService, private alertService: AlertService, private router: RouterModule) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public doLogin(): void {
    console.log(this.requestLogin);
    this.loginService.doLogin(this.requestLogin).subscribe(data => {
      this.alertService.info('', 'Funcionalidade ainda não implementada');
      //RouterModule.activateWith(['/user']);
      //this.router.navigat(['/punjab']);
    },
      httpError => {
        this.alertService.error('', httpError.error.message);
        console.error
      });
  }
}
