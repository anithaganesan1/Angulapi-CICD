import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Name',
  standalone: true
})
export class PipeNamePipe implements PipeTransform {

  transform(Name: any): string {
    if(Name == 0){

      return 'Anitha';

    }

    return 'Ganesan';  }

}

  
