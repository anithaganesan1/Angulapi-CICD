import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { category } from '../../models/category.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule, NgFor } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-multiapi',
  standalone: true,
  imports: [HttpClientModule,AsyncPipe,CommonModule],
  templateUrl: './multiapi.component.html',
  styleUrl: './multiapi.component.css'
})
export class MultiapiComponent implements OnInit  {
  http=inject(HttpClient);
  carlist: category [] =[];
  posts: any[] = [];
  users: any[] = [];
  error: string | null = null;

  //categorylists$ = this.getclist();
  ngOnInit(): void {
    //this.getpost()
    //this.getuser()
    forkJoin({
      posts: this.getPosts(),
      users: this.getUsers()
    }).subscribe({
      next: (results) => {
        this.posts = results.posts;
        this.users = results.users;
      },
      error: (err) => {
        this.error = 'Failed to load data.';
        console.error(err);
      }
    });

    }

    
    
    getPosts(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
  
    // API 2
    getUsers(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
  
    
}



