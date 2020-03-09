import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem(Constants.TOKEN);
    this.router.navigateByUrl('/login');
  }

}
