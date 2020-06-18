import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppComponent } from '../app.component';  
import { HomeComponent } from '../home/home.component';  
import { HelloComponent } from '../hello.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
              onSameUrlNavigation: 'reload',
  scrollOffset: [0, 0],
};

const routes: Routes = [ 
  {
    path: 'home',
    component: HomeComponent, 
  },
  {
    path: 'dummy-page',
    component: HelloComponent, 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
 ]
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }