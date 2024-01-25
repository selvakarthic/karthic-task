import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallStatus, SORTBY } from '../customers-data';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html',
  styleUrls: ['./customer-filter.component.css'],
  standalone : true ,
  imports : [ SharedModule ]

})
@ExceptionHandler
export class CustomerFilterComponent  implements OnInit {

  sortByLs : {id : SORTBY , text : string , icon : string , description : string , isSelected :boolean}[] = [] ;
  statusFilter : {id : CallStatus , text : string , isSelected :boolean}[] =[] ;
  selectedFilter : { sortBy : SORTBY , statusLs : CallStatus[] } = {sortBy : null , statusLs :[]};
  @Output() onClose = new EventEmitter();
  applyFilter ;
  constructor() { }

  ngOnInit() {
    this.initializePage();
  }

  initializePage()
  {
    this.sortByLs = [
      { id : SORTBY.ascending_name , text : 'Name' , description : 'A-Z' , icon : 'arrow-up-outline' ,isSelected : false},
      { id : SORTBY.descending_name , text : 'Name' , description : 'Z-A' , icon : 'arrow-down-outline' ,isSelected : false},
      { id : SORTBY.ascending_created , text : 'Created' , description : 'New to Old' , icon : 'arrow-up-outline' ,isSelected : false},
      { id : SORTBY.desceding_created , text : 'Created' , description : 'Old to New' , icon : 'arrow-down-outline' ,isSelected : false},
    ];
    this.statusFilter = [
      { id : CallStatus.ABROAD_EDUCATION , text : 'Abroad Education',isSelected : false},
      { id : CallStatus.ADMISSION_DONE , text : 'Admission Done',isSelected : false},
      { id : CallStatus.CALL_AFTER_12TH_EXAM , text : 'Call After 12th Exam',isSelected : false},
      { id : CallStatus.CALL_BACK , text : 'Call Back',isSelected : false},
      { id : CallStatus.CALL_WAITING , text : 'Call Waiting',isSelected : false},
      { id : CallStatus.CALL_NOT_PICKED , text : 'Call Not Picked',isSelected : false},
      { id : CallStatus.CALL_AFTER_CAT_RESULT , text : 'Call after CAT result',isSelected : false},
      { id : CallStatus.BUSY , text : 'Busy',isSelected : false},
      { id : CallStatus.CALL_AFTER_DEGREE_EXAM , text : 'Call After degree exam',isSelected : false},
    ]
  }

  selectStatus(selectedStatus : string)
  {
    this.statusFilter.forEach(status => {
      status.isSelected = status.id == selectedStatus ? !status.isSelected : status.isSelected 
    })
  }

  onFilterApply()
  {
    let selectedSort = this.sortByLs.filter(sort => sort.isSelected);
    let selectedStatus = this.statusFilter.filter(sort => sort.isSelected);
    // this.selectedFilter = undefined ;
    if(selectedSort.length) {
      this.selectedFilter.sortBy = selectedSort[0].id;
    }
    if(selectedStatus.length) {
      selectedStatus.forEach(status => {
        if(status.isSelected) {
          this.selectedFilter.statusLs.push(status.id)
        }
      })
    }
    this.applyFilter(this.selectedFilter);
  }

  selectSortBy(sortBy : string)
  {
    this.sortByLs.forEach(sort => {
      sort.isSelected = sort.id == sortBy ? !sort.isSelected : false ;  
    })
  }

}
