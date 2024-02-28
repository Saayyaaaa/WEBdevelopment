import { Component } from '@angular/core';
import { products, Product } from "../items/products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  currentCategory: string = "Все";
  allItems: any = products;
  categories: string[] = this.handleCategoriesList(this.allItems);



}