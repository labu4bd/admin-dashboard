import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private listTitles: any;
  location: Location;
  
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
      titlee = titlee.slice( 1 );
  }

  for(var item = 0; item < this.listTitles.length; item++){
      if(this.listTitles[item].path === titlee){
          return this.listTitles[item].title;
      }
  }
  return 'Dashboard';
  }
}
