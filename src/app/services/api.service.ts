import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import {LoginResultModel} from '../interfaces/login-result-model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResultModel>{
    let auth = false;
    let loginResult : LoginResultModel = {token : '', error: null};

    if (email == 'peter@klaven' && password == 'cityslicka'){
      loginResult.token = 'asldk123213lkj213';
      loginResult.error = null;
    };
    
    return of(loginResult);
  }
}