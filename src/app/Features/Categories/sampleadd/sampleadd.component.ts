import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { category } from '../../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddCategoryComponent } from "../add-category/add-category.component";
//import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-sampleadd',
  standalone: true,
  imports: [CommonModule, FormsModule, AddCategoryComponent],
  templateUrl: './sampleadd.component.html',
  styleUrl: './sampleadd.component.css'
})
export class SampleaddComponent implements OnInit {
carlist:category [] =[];
http = inject(HttpClient);

ngOnInit(): void {
this.getcarlist ()
}
getcarlist(){
  
this.http.get("https://localhost:7258/api/Categories").subscribe((res:any)=>{
  this.carlist=res;
  console.log(this.carlist);
})

}
}
