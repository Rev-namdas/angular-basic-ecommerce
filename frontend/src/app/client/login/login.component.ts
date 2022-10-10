import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameField: string = ""
  passwordField: string = ""
  message = ""

  constructor(private apiCall: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  checkAuthentication(){
    if(this.usernameField === ""){
      this.message = "Username required"
    } else if(this.passwordField === ""){
      this.message = "Password required"
    } else {
      this.message = ""
      
      const payload = {
        username: this.usernameField,
        password: this.passwordField
      }
      
      this.apiCall.loginAccount(payload).subscribe((data: any) => {
        if(data.flag === 'SUCCESS'){
          localStorage.setItem("authstatus", this.usernameField)
  
          if(data.user.role === 'admin'){ 
            window.location.href = "admin/orders"
          } else if(data.user.role === 'user'){
            window.location.href = "user/checkout"
          }
        }
      })
    }

  }
}
