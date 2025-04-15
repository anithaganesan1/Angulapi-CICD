import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employeedata',
  standalone: true,
  imports: [],
  templateUrl: './employeedata.component.html',
  styleUrl: './employeedata.component.css'
})
export class EmployeedataComponent {

  //@ViewChild('subcontent') subContent: any;

  @ViewChild('empform') empform: ElementRef |undefined;

  openmodel()
  {

    if(this.empform)
    {}
  }

}
