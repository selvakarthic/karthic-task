import { NgModule } from '@angular/core';
import { MenuPageRoutingModule } from './menu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuPage } from './menu.page';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    SharedModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
