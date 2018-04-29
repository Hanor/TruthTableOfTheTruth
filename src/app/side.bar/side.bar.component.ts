import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side.bar.component.html',
  styleUrls: ['./side.bar.component.scss']
})
export class SideBarComponent implements OnInit {

  active: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe(( event ) => {
      if ( event instanceof NavigationStart ) {
        this.active = event.url.replace('/', '');
      } else if ( event instanceof NavigationEnd ) {
        this.active = event.urlAfterRedirects.replace('/', '');
      }
    })
  }

}
