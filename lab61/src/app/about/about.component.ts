import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../products";
import {NgIf} from "@angular/common";
// import EventEmitter from "node:events";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

}
