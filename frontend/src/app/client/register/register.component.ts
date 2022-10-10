import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usernameField: string = ""
  passwordField: string = ""
  message = ""

  constructor(private apiCall: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNewAccount(){
    if(this.usernameField === ""){
      this.message = "Username required"
    } else if(this.passwordField === ""){
      this.message = "Password required"
    } else {
      const payload = {
        username: this.usernameField,
        password: this.passwordField
      }
      
      this.apiCall.registerAccount(payload).subscribe((data: any) => {
        if(data.flag === 'SUCCESS'){
          window.location.href = "user/login"
        }
      })
    }
    
  }
}
