import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: string;
  pwd: string;
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.authenticate(this.uname, this.pwd);
    this.router.navigateByUrl('/home');
  }

}
