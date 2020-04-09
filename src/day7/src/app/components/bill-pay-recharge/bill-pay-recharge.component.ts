import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-pay-recharge',
  templateUrl: './bill-pay-recharge.component.html',
  styleUrls: ['./bill-pay-recharge.component.css']
})
export class BillPayRechargeComponent implements OnInit {
  title: string = 'Bill Payment';
  constructor() { }

  ngOnInit(): void {
  }

}
