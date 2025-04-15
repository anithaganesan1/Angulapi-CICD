import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "./core/Components/navbar/navbar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  http=inject(HttpClient);


  private getcategorylist()
  {
this.http.get('https://localhost:7258/api/Categories');

  }
}
