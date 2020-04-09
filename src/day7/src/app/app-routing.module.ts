import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { BillPayRechargeComponent } from './components/bill-pay-recharge/bill-pay-recharge.component';
import { OffersComponent } from './components/offers/offers.component';


const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountsComponent },
  { path: 'fundtransfer', component: FundTransferComponent },
  { path: 'billpay', component: BillPayRechargeComponent },
  { path: 'offers', component: OffersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
