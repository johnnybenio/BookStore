import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  imports: [FormsModule , CommonModule],
  
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }



  onLogin(loginForm: NgForm):void{
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName)
      this.alertify.success('Login Successful');
    }else{
      this.alertify.error('Login Failed, try again!');
    }
  }
}
