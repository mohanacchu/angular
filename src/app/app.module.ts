import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JwtComponent } from './jwt/jwt.component';
import { PoliceComponent } from './police/police.component';
import { GovtComponent } from './govt/govt.component';
import {ParentComponent}    from './parent.component';
import {ChildOneComponent}  from './childone.component';
import {ChildTwoComponent}  from './childtwo.component';


@NgModule({
  declarations: [
    AppComponent,
    JwtComponent,
    PoliceComponent,
    GovtComponent,ParentComponent,ChildOneComponent,ChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
