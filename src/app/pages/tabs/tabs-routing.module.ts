import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children : [
      {
        path: "",
        pathMatch: "full",
        redirectTo: 'home',
      },
      {
        path: 'home',
        children : [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'allocations',
        children : [
          {
            path :'',
            loadChildren: () => import('./allocations/allocations.module').then(m => m.AllocationsPageModule)
          }]
      },
      {
        path: 'customers',
        children : [
          {
            path :'',
            loadChildren: () => import('./customers/customers.module').then(m => m.CustomersPageModule)
          }]
      },
      {
        path: 'menu',
        children : [
          {
            path :'',
            loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
          }]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
