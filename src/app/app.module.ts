import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TruthModule } from './truth/truth.module';
import { NavBarModule } from './nav.bar/nav.bar.module';
import { SideBarModule } from './side.bar/side.bar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TruthModule,
    NavBarModule,
    SideBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
