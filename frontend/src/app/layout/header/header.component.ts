import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  viewHeader = true
  loggedIn = false

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.path() == "/user/login" || this.location.path() == "/user/register"){
      this.viewHeader = false
    }

    const checkAuth = localStorage.getItem("authstatus")
    console.log('✅', checkAuth, this.loggedIn);
    
    if(
      checkAuth === null ||
      checkAuth === undefined ||
      checkAuth === ""
    ){
      console.log('😢', checkAuth, this.loggedIn);
      this.loggedIn = false
    } else {
      console.log('😒', checkAuth, this.loggedIn);
      
      this.loggedIn = true
    }
  }

  loggedOut(){
    this.loggedIn = false
    localStorage.removeItem("authstatus")
  }

}
