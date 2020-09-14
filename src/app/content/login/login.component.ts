import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Login } from "./login";
import { LoginService } from "./login.service";
import { AuthGuard } from "../../authentication/auth.guard";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'User Login';
  userModel = new Login('', '');

  constructor(
    public router: Router,
    private titleService: Title,
    private _loginService: LoginService,
    private _authGuard: AuthGuard,
    private _router: Router
    ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    if(this.getLoginCookie('loginStatus')){
      this._router.navigate(['/dashboard']);
    }
  }
  
  onSubmit(){
    this._loginService.getLogin(this.userModel).subscribe(response => {
      console.log(response);
      if (Number(response) == 1) {
        this.setLoginCookie();
        this.router.navigate(['/dashboard'])
      } else {
        alert("Login fail");
      }
    });
  }

  setLoginCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = 'loginStatus' + "=" + 1 + ";" + expires + ";path=/";
  }

  getLoginCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
 
  

  // onSubmit(){
  //   this._loginService.getLogin(this.userModel)
  //   .subscribe(      
  //     (data) => {
  //       if(data == 1){
  //         this._authGuard.checkUserLogin(true);
  //         this._router.navigate(['/dashboard']);
  //       }else{
  //         alert("Invalid Email or Password");
  //         this._authGuard.checkUserLogin(false);
  //       }
  //     }
  //   )
  }

    

