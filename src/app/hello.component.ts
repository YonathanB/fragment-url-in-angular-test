import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hello',
  template: `
    - Scroll position top <br>
    <h1 style="padding-top:500px">Hello Dummy Page!</h1>
    <a [routerLink]='"/home"' >Home Page</a>
  `,
  styles: [``]
})
export class HelloComponent  { 
constructor(private route: ActivatedRoute){
       console.log('*************');
   this.route.fragment.subscribe( fragment =>{
      console.log(fragment);
 })
}

}
