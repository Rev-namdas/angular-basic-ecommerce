<<<<<<< HEAD
import { Location } from '@angular/common';
=======
>>>>>>> b310343c4393935afd3546e5e4c8dde6ee43926e
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
<<<<<<< HEAD
  viewFooter = true

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.path() == "/user/login" || this.location.path() == "/user/register"){
      this.viewFooter = false
    }
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> b310343c4393935afd3546e5e4c8dde6ee43926e
  }

}
