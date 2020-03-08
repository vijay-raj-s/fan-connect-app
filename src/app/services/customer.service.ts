import {Injectable} from '@angular/core';
import { Constants } from '../constants';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    localStorage.setItem(Constants.TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(Constants.TOKEN) != null;
  }
}