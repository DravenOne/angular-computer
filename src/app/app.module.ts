import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './not-found.component';

import { AppComponent } from './app.component';
import {WorkspaceModule} from './global-layout/workspace/workspace.module';
import { MainComponent } from './components/main/main.component';
import { ViewComponent } from './components/view/view.component';
import { ControllerComponent } from './components/controller/controller.component';
import { MessageComponent } from './components/message/message.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import {HeroJobAdComponent} from './components/banner/hero-job-ad.component';
import { BannerComponent } from './components/banner/banner.component';
import {HeroProfileComponent} from './components/banner/hero-profile.component';
import {AdDirective } from './components/banner/ad.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './Prime/input/input.component';
import { SpyDirective } from './spy.directive';
import { TabViewModule} from 'primeng/tabview';
import { AccountsComponent } from './bz-modules/accounts/accounts.component';
import { HeroDetailComponent } from './bz-modules/hero-detail/hero-detail.component';
import { HeroListComponent } from './bz-modules/hero-list/hero-list.component';
import { HeroService } from './service/hero.service';
import { FormComponent } from './bz-modules/form/form.component';
import { FormDetailComponent } from './bz-modules/form-detail/form-detail.component';
import { TablesComponent } from './bz-modules/table/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ViewComponent,
    ControllerComponent,
    MessageComponent,
    CountdownComponent,
    HighlightDirective,
    UnlessDirective,
    BannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    InputComponent,
    SpyDirective,
    AccountsComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
    HeroListComponent,
    FormComponent,
    FormDetailComponent,
    TablesComponent,
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    WorkspaceModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
