import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'app',
    component: UserComponent,
    data: { roles: ['ROLE_HOME'] }
  },
  {
    path: 'payment/:uuid',
    component: PaymentComponent,
    data: { roles: ['ROLE_HOME'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
