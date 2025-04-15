import { Component, inject,OnInit } from '@angular/core';
import { SampleService } from '../../../services/sample.service';
import { category } from '../../../../models/category.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-servicecall',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './servicecall.component.html',
  styleUrl: './servicecall.component.css'
})
export class ServicecallComponent implements OnInit {
  carlist:category [] = [];


  sampleservice = inject(SampleService);
  ngOnInit(): void {
    this.sampleservice.getbnlist().subscribe(
      (result:any)=>{
      this.carlist =result;
        //console.log(result);

    },error=>{
      alert("ApI ERROR")
  })
}

}
