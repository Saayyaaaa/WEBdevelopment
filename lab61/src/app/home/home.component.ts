import { Component } from '@angular/core';
import {products} from "../products";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  products = [...products];

  share(){
    window.alert("This product has been shared!")
  }
}
