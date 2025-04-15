import {  Component } from '@angular/core';
import { NbaService } from '../../services/nba.service';
import { LoaderService } from '../../services/loader.service';
import { category } from '../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { PipeNamePipe } from '../../pipe-name.pipe';
import {BtnDirective} from '../../btn.directive'
import { AppInitService } from '../../app-init.service';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {  initializeApp1 } from '../../app.config';


@Component({
  selector: 'app-loadinterc',
  standalone: true,
  imports: [CommonModule, FormsModule,PipeNamePipe,BtnDirective,],
  providers: [
    AppInitService,{ provide: APP_INITIALIZER,
    useFactory: initializeApp1,
    deps: [AppInitService],
    multi: true,
  },
],
  templateUrl: './loadinterc.component.html',
  styleUrl: './loadinterc.component.css'
  
})

export class LoadintercComponent {
  players: any[] = [];
  teams: any[] = [];
  loading: any;

  loading$ = this.loader.isLoading$;
  constructor(private nbaApi: NbaService, private loader: LoaderService,private httpclient :HttpClient) {}

 // @pipe({
    //name;'mypipe'
  //})
  
  getcarlist(){
   // carlist:category [] =[];
    this.players = [];

    this.httpclient.get("https://localhost:7258/api/Categories").subscribe((res:any)=>{
      
      this.players=res;
      console.log(res);
    })
  }
    loadPLayers() {
      this.players = [];
      this.nbaApi.getplayer().subscribe((res:any) => {
        debugger;
        console.log(res);

        this.players = res;
      });
    }

    loadTeams() 
    {
      this.httpclient.get('https://localhost:7258/api/EmployeeMaster').subscribe((res:any)=>{
        debugger;

      //this.nbaApi.getTeams().subscribe((data) => {
        this.teams = res;
        console.log(res);

      });
    }
  
   

  }



  function loadPLayers() {
    throw new Error('Function not implemented.');
  }

