import { Component, OnInit, ViewChild } from '@angular/core';
import { ALLOCATIONS_DATA, ALLOCATIONS_DATA_MODEL } from './allocations-data';
import { IonRefresher } from '@ionic/angular';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.page.html',
  styleUrls: ['./allocations.page.css'],
})
@ExceptionHandler
export class AllocationsPage implements OnInit {

  onShowSearch : boolean = false ;
  allocationLs : ALLOCATIONS_DATA_MODEL[] =[] ;
  filteredAllocationLs :ALLOCATIONS_DATA_MODEL[] =[] ;
  searchPlaceholder : string = 'Search by Name/Phone/Company';
  @ViewChild(IonRefresher) ionRefresher: IonRefresher | undefined;


  constructor() { }

  ngOnInit() {
    this.initializePage();
  }

  initializePage()
  {
    this.allocationLs = ALLOCATIONS_DATA;
    this.filteredAllocationLs = ALLOCATIONS_DATA;
    this.ionRefresher?.complete();
  }

  onToggleShowSearch()
  {
    this.onShowSearch = !this.onShowSearch ;
  }

  onSearch(event : any)
  {
    if(event.detail.value) {
      this.filterBySearch(event.detail.value);
    }
    else {
      this.filteredAllocationLs = this.allocationLs;
    }
  }

  filterBySearch(searchVal : string)
  {
    this.filteredAllocationLs = this.allocationLs.filter(alloc => alloc.name.toLowerCase().includes(searchVal) || alloc.assigneeName.toLowerCase().includes(searchVal) || alloc.phoneNumber.toLowerCase().includes(searchVal) )
  }

}
