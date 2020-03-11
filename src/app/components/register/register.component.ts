import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';

interface User {
  email?: string;
  password?: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  user : User = {}

  constructor() { }

  ngOnInit(): void {
  }

}
