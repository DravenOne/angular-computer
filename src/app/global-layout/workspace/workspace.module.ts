import { NgModule } from '@angular/core';

import { WorkspaceComponent } from './workspace.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import { WorkspaceRoutingModule } from './workspace.routing';

@NgModule({
    declarations:[
        WorkspaceComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports:[
        ToolbarModule,
        WorkspaceRoutingModule,
        SplitButtonModule
    ],
})

export class WorkspaceModule{};