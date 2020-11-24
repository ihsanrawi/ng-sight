import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order'

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {
      id: 1, 
      customer:{
        id:1, name:'Main St Bakery', email:'mainst@example.com', state:'CO'
      }, total:230, 
      placed: new Date(2020,11,23), fulfilled: new Date(2020,12,13), 
    },
    {
      id: 2, 
      customer:{
        id:2, name:'Main St Bakery', email:'mainst@example.com', state:'CO'
      }, total:230, 
      placed: new Date(2020,11,23), fulfilled: new Date(2020,12,13), 
    },
    {
      id: 3, 
      customer:{
        id:3, name:'Main St Bakery', email:'mainst@example.com', state:'CO'
      }, total:230, 
      placed: new Date(2020,11,23), fulfilled: new Date(2020,12,13), 
    },
  ];

  

  ngOnInit(): void {
  }

}
