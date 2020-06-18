import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Router } from '@angular/router';
import { AppRoutingModule }  from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [  ]
})
export class AppModule { }
