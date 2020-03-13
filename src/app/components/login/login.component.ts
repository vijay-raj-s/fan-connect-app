import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

interface User {
  email?: string;
  password?: string
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginPageComponent {

  user : User = {}
  

  constructor(private api: ApiService, private customer: CustomerService, private router: Router) {
    this.user.email = 'vijay@gmail.com';
    this.user.password = 'abc123';
  }

  tryLogin() {
    this.api.login(
      this.user.email,
      this.user.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
            this.router.navigateByUrl('/dashboard');
          }else{
            this.router.navigateByUrl('/login');
          }
        },
        r => {
          alert(r.error.error);
        });
  }

  navigate(route){
    debugger;
    this.router.navigate(route);
  }

}