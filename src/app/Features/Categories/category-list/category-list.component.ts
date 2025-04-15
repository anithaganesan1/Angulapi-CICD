import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Component,inject,input } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../../../models/category.model';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [HttpClientModule,AsyncPipe,AlertComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  http=inject(HttpClient);

  categorylists$ = this.getcategorylist();

  private getcategorylist(): Observable<category[]>
  {
  return this.http.get<category[]>('https://localhost:7258/api/Categories');

  }
}
