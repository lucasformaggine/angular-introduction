import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the product id from the current route.
    const routeParameters = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParameters.get("productId"));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
