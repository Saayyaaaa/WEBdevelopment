import { Component } from '@angular/core';
import {products} from "../products";
import {NgForOf, NgIf} from "@angular/common";
import {AboutComponent} from "../about/about.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AboutComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  products = [...products];

  share(){
    window.alert("This product has been shared!")
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}
