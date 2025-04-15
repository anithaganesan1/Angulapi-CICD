import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../../../models/add-category-request.model';
import { CategoryService } from '../../services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';
import { Pipe,PipeTransform } from '@angular/core';
@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule,AlertComponent,HttpClientModule,UpperCasePipe],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  model : AddCategoryRequest
  
constructor(private categoryservice : CategoryService)
{
  this.model = {
    Name:'',
    UrlHandle:''

  };
}
  onFormSubmit(){
    //console.log(this.model);
    //debugger;
this.categoryservice.addcategory(this.model)
.subscribe({
  next :(response :any)=>{
    if (response)
    {  
        alert("created sucessfully");
    }
    else{        
      alert(response.message);
    }
  },
  
})
  }
}
