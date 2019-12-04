import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public  products: any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/products")
      .subscribe(response => {  //subscire gia na ektelestei            repsonce = onoma metabriths opws 8es mporeis na thn peis
        this.products = response;

      });

  }

}
