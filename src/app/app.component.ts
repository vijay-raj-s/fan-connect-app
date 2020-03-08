import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'fan-connect-app';
  showNavbar : boolean = false;

  constructor(private router: Router){}

  ngAfterContentChecked(){
    if(this.router.url == '/'){
      return;
    }  
    if (this.router.url.includes('login') || this.router.url.includes('register')) {
      this.showNavbar = false; 
    } else{
      this.showNavbar = true; 
    }
  }
}
