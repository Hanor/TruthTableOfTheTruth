import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { TruthModule } from './truth/truth.module';
import { NavBarModule } from './nav.bar/nav.bar.module';
import { HomeModule } from './home/home.module';
import { SideBarModule } from './side.bar/side.bar.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    TruthModule,
    NavBarModule,
    AppRoutingModule,
    SideBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
