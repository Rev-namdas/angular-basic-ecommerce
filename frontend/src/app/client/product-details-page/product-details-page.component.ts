import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  param = ""
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let value: any = this.route.snapshot.queryParams["pid"]
    console.log(value);
    
  }

  // ngOnInit(): void {
  //   this.sub = this.route.queryParams.subscribe((params) => {
  //     this.param = params["pid"]
  //     console.log(params["pid"]);
      
  //   })
  // }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
