import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import{ WorkspaceComponent } from './global-layout/workspace/workspace.component';
import { PageNotFoundComponent } from './not-found.component';


const appRouter:Routes=[
    {
        path:'',
        redirectTo:'/workspace',
        pathMatch:'full'
      },
      {
        path:'main',
        component:MainComponent
      },
      {
        path:'workspace',
        component:WorkspaceComponent
      },
      {
        path:'**',
        component:PageNotFoundComponent,
      }
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouter),
      ],
      exports:[RouterModule],
})
export class AppRoutingModule{}