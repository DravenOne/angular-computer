import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './workspace.component';
import { AccountsComponent } from '../../bz-modules/accounts/accounts.component';
import { RouterGuard } from '../../service/router-guard.service';
import { HeroDetailComponent } from '../../bz-modules/hero-detail/hero-detail.component';
import { HeroListComponent } from '../../bz-modules/hero-list/hero-list.component';
import { FormComponent } from '../../bz-modules/form/form.component';
import { FormDetailComponent } from '../../bz-modules/form-detail/form-detail.component';
import { TablesComponent } from '../../bz-modules/table/tables/tables.component';



const routes:Routes=[
    {
        path:'workspace',
        component:WorkspaceComponent,
        children:[
            {
                path:'',
                redirectTo:'account',
                pathMatch:'full',
            },
            {
                path:'account',
                component:AccountsComponent,
                // canActivate:[RouterGuard]
            },
            {
                path:'HeroDetail',
                component:HeroDetailComponent,
            },
            {
                path:'HeroLsit',
                component:HeroListComponent,
            },
            {
                path:'Formlist',
                component:FormComponent,
            },
            {
                path:'FormDetail:id',
                component:FormDetailComponent,
            },
            {
                path:'Tables',
                component:TablesComponent,
            }
        ]
    }

]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
      ],
      exports:[RouterModule],
})
export class WorkspaceRoutingModule{}
