import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule,Validators,AbstractControl } from '@angular/forms';
import { HttpClient,HttpClientModule,HttpParams } from '@angular/common/http';
import { CommonModule, DatePipe, NgFor, UpperCasePipe,JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { category } from '../../models/category.model';
import { NgxPaginationModule, Page } from 'ngx-pagination';
import { AsyncPipe } from '@angular/common';
import { Observable,interval} from 'rxjs';
import {map,take} from'rxjs/operators';
import { UnaryOperator } from '@angular/compiler';
import { SampleService } from '../services/sample.service';
import Validation from '../../utils/Validation';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-responsecall',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive,UpperCasePipe,DatePipe,JsonPipe,NgxPaginationModule,HttpClientModule,AsyncPipe,ReactiveFormsModule],
  templateUrl: './responsecall.component.html',
  styleUrl: './responsecall.component.css'
})
export class ResponsecallComponent implements OnInit {
isloader:boolean=true;
currentDate : Date= new Date();
carlist: category [] =[];
//asynlist: category[] = [];
asynlist:any;
http = inject(HttpClient);
passenger: any;
users:any;
pagingConfig:any;
//PagingConfig = {} new  as PagingConfig;
totalItems:any;
p: number = 1;

total: number = 0;
pageSize = 5;
currentPage = 1;
mydata$: Observable<any> | undefined;
//---


//-----
form: FormGroup = new FormGroup({
  fullname: new FormControl(''),
  username: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  confirmPassword: new FormControl(''),
  acceptTerms: new FormControl(false),
});
submitted = false;


//---
constructor(private sampleservive: SampleService ,private formBuilder: FormBuilder,){}


ngOnInit(): void {
this.getcarlist ()
this.mydata$ = this.sampleservive.getnglist();
//this.mydata$ =interval(1000).pipe(map(x=>this.getcarlist()),take(10))
///----
this.form = this.formBuilder.group(
  {
    fullname: ['', Validators.required],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ],
    ],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue],
  },
  {
    validators: [Validation.match('password', 'confirmPassword')],
  }
);


//---
}
//this for git changes
getcarlist(){
this.http.get("https://localhost:7258/api/Categories").subscribe((res:any)=>{
  //this.http.get("https://localhost:7258/consume-multiple").subscribe((res:any)=>{

  this.carlist=res;
  this.isloader=false;
  //this.passenger = res.data;
  //this.users = res.data;
  this.pageSize;
  this.currentPage;
  this.total = res.length;
  console.log(this.carlist);

  //----

  //this.pagingConfig = {
    //itemsPerPage: this.currentPage,
    //currentPage: this.currentPage,
    //totalItems: this.total
  //}



  
  //this.total = Math.ceil(res.data/3);
 // this.total = Math.ceil(res.data.total / 3);

  //const linkHeader = res.headers.get('Link');
  //const links = linkHeader.split(',');
  //const prevLink = links.find(l => l.includes('rel="prev"'));
  //const nextLink = links.find(l => l.includes('rel="next"'));
  //console.log(prevLink, nextLink);

  console.log(this.total);
})

}



onTableSizeChange(event:any): void {
  this.pagingConfig.itemsPerPage = event.target.value;
  this.pagingConfig.currentPage = 1;
  //console.log(this.pagingConfig.constructor);

  this.getcarlist();
}

pageChangeEvent(event: any){
  this.p = event.target.value;

  this.currentPage =1;
  this.pageSize=5;


  this.getcarlist();

}
//---asyn
categorylists$ = this.getAsynusing();

  private getAsynusing(): Observable<category[]>
  {
    
  return this.http.get<category[]>('https://localhost:7258/api/Categories');

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  
}
