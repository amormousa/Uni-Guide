import { Routes } from '@angular/router';
import { PricingComponent } from './pricing.component';
import { PaymentSuccessComponent } from './payment-success.component';
import { PaymentFailureComponent } from './payment-failure.component';
import { PaymentCancelledComponent } from './payment-cancelled.component';

export const PRICING_ROUTES: Routes = [
  { path: '', component: PricingComponent },
  { path: 'success', component: PaymentSuccessComponent },
  { path: 'failure', component: PaymentFailureComponent },
  { path: 'cancelled', component: PaymentCancelledComponent },
];
