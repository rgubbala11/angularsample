import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './shared/auth-service.service';
import { IUser } from './shared/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
  title = 'my-app';
  user: IUser;

  constructor(private authService: AuthServiceService){

  }

  
}
