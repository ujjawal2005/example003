import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  customers: Customer[];
  constructor() { }

  ngOnInit() {
    this.customers = CUSTOMERS;
  }

}
