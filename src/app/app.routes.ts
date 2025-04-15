import { Routes,RouterModule } from '@angular/router';
import { CategoryListComponent } from './Features/Categories/category-list/category-list.component';
import { AddCategoryComponent } from './Features/Categories/add-category/add-category.component';
import { SampleaddComponent } from './Features/Categories/sampleadd/sampleadd.component';
import { ServicecallComponent } from './Features/Categories/category-list/servicecall/servicecall.component';
import { ResponsecallComponent } from './Features/responsecall/responsecall.component';
import {ServersidepaginationComponent} from './Features/serversidepagination/serversidepagination.component'
import { MultiapiComponent } from './Features/multiapi/multiapi.component';
import { LOGINComponent } from './components/login/login.component';
import { LAYOUTComponent } from './components/layout/layout.component';
import { EmployeedataComponent } from './components/employeedata/employeedata.component';
import { LoadintercComponent } from './components/loadinterc/loadinterc.component';
export const routes: Routes = [
    {path:'Categorylist/Categories',
    component:CategoryListComponent},
    {path:'login',
    component:LOGINComponent
    },
    {path:'layout',
    component:LAYOUTComponent,
    

    },
    {path:'Categorylist/Categories/Add',
    component:AddCategoryComponent},
    {path:'Categorylist/Categories/sampleadd',
    component:SampleaddComponent},
        
    {path:'Categorylist/Categories/servicecall',
    component:ServicecallComponent},

    {path:'Features/responsecall',
    component:ResponsecallComponent},
    {path:'Features/serversidepagination',
    component:ServersidepaginationComponent},
    
   {path:'Features/multiapi',
    component :MultiapiComponent},
    {path:'employeedata',
        component:EmployeedataComponent},
        {path:'loadinterc',
            component:LoadintercComponent},
           
    {path:'',
    redirectTo:'login',
    pathMatch:'full'},
    {path:'add',
    component:ResponsecallComponent}
                 

];


