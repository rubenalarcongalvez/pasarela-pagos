import { Routes } from '@angular/router';
import { KoFiComponent } from './views/ko-fi/ko-fi.component';
import { StripeComponent } from './views/stripe/stripe.component';
import { PaypalComponent } from './views/paypal/paypal.component';

export const routes: Routes = [
    {path: 'ko-fi', component: KoFiComponent, pathMatch: 'full'},
    
    {path: 'ko-fi', component: KoFiComponent},
    {path: 'stripe', component: StripeComponent},
    {path: 'paypal', component: PaypalComponent},

    {path: '**', redirectTo: 'ko-fi'}
];
