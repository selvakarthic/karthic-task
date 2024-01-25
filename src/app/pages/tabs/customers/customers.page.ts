import { Component, OnInit, ViewChild } from '@angular/core';
import { CUSTOMERS_LIST, CUSTOMER_MODEL, CallStatus, SORTBY } from './customers-data';
import { IonRefresher, ModalController } from '@ionic/angular';
import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.css'],
})
@ExceptionHandler
export class CustomersPage implements OnInit {

  customerLs : CUSTOMER_MODEL[] =[];
  filteredCustomerLs : CUSTOMER_MODEL[] =[];
  onShowSearch : boolean = false ;
  searchPlaceholder : string = 'Search by Name/Phone';
  @ViewChild(IonRefresher) ionRefresher: IonRefresher | undefined;
  constructor(
    private modal : ModalController
  ) { }

  ngOnInit() {
    this.initializePage();
  }

  onToggleShowSearch()
  {
    this.onShowSearch = !this.onShowSearch ;
  }

  initializePage()
  {
    this.customerLs = CUSTOMERS_LIST;
    this.filteredCustomerLs = CUSTOMERS_LIST;
    this.ionRefresher?.complete();
  }

  onSearch(event : any)
  {
    if(event.detail.value) {
      this.filterBySearch(event.detail.value);
    }
    else {
      this.filteredCustomerLs = this.customerLs;
    }
  }

  filterBySearch(searchVal : string)
  {
    this.filteredCustomerLs = this.customerLs.filter(alloc => alloc.name.toLowerCase().includes(searchVal) || alloc.assigneeName.toLowerCase().includes(searchVal) || alloc.phoneNumber.toLowerCase().includes(searchVal) )
  }

  async openFilterModal()
  {
    const popover = await this.modal.create({
      initialBreakpoint : 0.75 ,
      component: CustomerFilterComponent,
      componentProps: {
        applyFilter : this.applyFilter.bind(this)
      },
      id: 'customer_filter'
    });
    await popover.present();
  }

  closeFilterModal()
  {
    this.modal.dismiss(undefined,undefined,'customer_filter');
  }

  applyFilter(pFilter : { sortBy : SORTBY , statusLs : CallStatus[] } )
  {
    this.closeFilterModal();
    if(pFilter) {
      let statusFiltered ;
      if(pFilter.statusLs && pFilter.statusLs.length){
        statusFiltered = this.filteredCustomerLs.filter(filter => pFilter.statusLs.includes(filter.status))
      }
      else {
        statusFiltered = this.filteredCustomerLs ;
      }
      if(pFilter.sortBy)
      {
        switch(pFilter.sortBy) {
          case SORTBY.ascending_name : {
            statusFiltered = statusFiltered.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            break;
          }
          case SORTBY.descending_name : {
            statusFiltered = statusFiltered.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
            break;
          }
          case SORTBY.ascending_created : {
            statusFiltered = statusFiltered.sort((a,b) => new Date(a.name) > new Date(b.name) ? 1 : -1);
            break;
          }
          case SORTBY.desceding_created : {
            statusFiltered = statusFiltered.sort((a,b) => new Date(a.name) > new Date(b.name) ? -1 : 1);
            break;
          }
        }
      }
      this.filteredCustomerLs = statusFiltered ;
    }
  }

}
