import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
let options = {
  // root: document.querySelector('#scrollArea'),
  // rootMargin: '15px 0px 0px 0px'
  threshold: [0.5]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  name = 'Angular';
  ids: Array<String> = ['one', 'two', 'three', 'four']
constructor(private route: ActivatedRoute, private router: Router) {
    router.events.
    pipe(filter(evt => evt instanceof NavigationEnd))
    .subscribe((val) => {
        // see also 
        console.log('end - ', val ) 
    });
       router.events.
    pipe(filter(evt => evt instanceof NavigationStart))
    .subscribe((val) => {
        // see also 
        console.log('start -', val ) 
    });
       console.log('*************');
   this.route.fragment.subscribe( fragment =>{
      console.log(fragment);
 })
}
  ngAfterViewInit() {

    this.ids.forEach(el =>{
    var intersectionObserver = new IntersectionObserver(function(entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.
  console.log(entries[0].intersectionRatio, entries)
  if (entries[0].intersectionRatio <= 0 ||!entries[0].isIntersecting) return;

  console.log('Loaded', el);
},options);
// start observing
intersectionObserver.observe(document.querySelector('#'+el));

    })

  }

}
// this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         const fragment = router.parseUrl(router.url).fragment;
//         if (fragment) {
//           const element = document.getElementById(fragment);
//           if (element) {
//             element.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start',
//             });
//           }
//         } else {
//           this.pageContainer.nativeElement.scrollTo(0, 0);
//         }
//       }
//     });