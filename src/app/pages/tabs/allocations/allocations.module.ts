import { NgModule } from '@angular/core';
import { AllocationsPageRoutingModule } from './allocations-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AllocationsPage } from './allocations.page';

@NgModule({
  imports: [
    SharedModule,
    AllocationsPageRoutingModule
  ],
  declarations: [AllocationsPage]
})
export class AllocationsPageModule {}
