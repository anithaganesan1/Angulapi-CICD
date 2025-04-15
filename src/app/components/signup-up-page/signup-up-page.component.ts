import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpClientModule,HttpParams } from '@angular/common/http';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup-up-page',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './signup-up-page.component.html',
  styleUrl: './signup-up-page.component.css'
})
export class SignupUpPageComponent {
  //signUpForm: FormGroup | undefined 
  signUpForm !: FormGroup

  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsersList",this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset()
      this.router.navigate(["login"])
    },err=>{
      alert("Something went wrong")
    })
  }

}
