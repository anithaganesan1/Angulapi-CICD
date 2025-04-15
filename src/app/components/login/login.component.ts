import { CommonModule } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LOGINComponent {
liginobj:any = {
  username:'',
  password:''
};
loginuser:any ={
  //userId:'',
  EmailId: '',
  Password: ''
};
logincategory:any={
  Name:'',
  UrlHandle :''
}
router=inject(Router);
http=inject(HttpClient);
getonlist(){
  debugger;
  this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.loginuser).subscribe((res:any)=>{

    //console.log(res);
    debugger;
    if(res.response)
      
    {
      debugger;
    localStorage.setItem("angular",JSON.stringify(res.data));
    this.router.navigateByUrl("layout")
    }
  
  else{alert(res.message)

  }})
}


getLogin()
{
debugger
  if(this.liginobj.username=="Admin" && this.liginobj.password=='ani81')
  {
    this.router.navigateByUrl("layout")
 }
  else{
    alert("wrong credentials");
}


////incorrect
    //this.http.post("https://projectapi.gerasim.in/api/UserApp/login",this.loginuser).subscribe((res:any)=>{

      //this.http.post("https://localhost:7258/api/Categories",this.logincategory).subscribe((res:any)=>{

      
      //debugger;
     // localStorage.setItem("angular",JSON.stringify(res.data));

      //localStorage.setItem("angular",res.data.userId)
      //this.router.navigateByUrl("layout")
    // },
     //error=>{ 
      //debugger;
     // alert("wrong credential")
     // }
   // )
  }

}
