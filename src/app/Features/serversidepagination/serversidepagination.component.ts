import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, NgFor, UpperCasePipe,JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-serversidepagination',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,UpperCasePipe,DatePipe,JsonPipe],
  templateUrl: './serversidepagination.component.html',
  styleUrl: './serversidepagination.component.css'
})
export class ServersidepaginationComponent {
id!: string;
categoryname : string='';
urlhandler : string ='';
constructor(private http:HttpClient){}


onsearch(){

  let params=new HttpParams()
  .set ('categoryname',this.categoryname.toString())
  .set ('urlhandler',this.urlhandler.toString())
if(this.categoryname!=='')
{
  params = params.set('categoryname',this.categoryname)
}
if(this.id)
  {
    params = params.set('id',this.id)
  }
  if(this.urlhandler!=='')
    {
      params = params.set('urlhandler',this.urlhandler)
    }
    this.http.get("https://localhost:7258/api/Categories")
    
}
}
