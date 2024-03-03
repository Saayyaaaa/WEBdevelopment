import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from "./profile.component";
import {HomeComponent} from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent, ProfileComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab61';
}
