import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { BillPayRechargeComponent } from './components/bill-pay-recharge/bill-pay-recharge.component';
import { OffersComponent } from './components/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    FundTransferComponent,
    BillPayRechargeComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
