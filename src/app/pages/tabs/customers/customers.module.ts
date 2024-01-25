import { NgModule } from '@angular/core';
import { CustomersPageRoutingModule } from './customers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersPage } from './customers.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    SharedModule,
    CustomersPageRoutingModule
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
