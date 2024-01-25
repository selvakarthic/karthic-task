import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { DateTypeFilter } from 'src/app/shared/constant';
import { CALL_HISTORY_JSON, CALL_TYPE, CallHistoryType } from './home-data';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
@ExceptionHandler
export class HomePage implements OnInit {

  filterType = DateTypeFilter;
  filterLs : {text:string,id:DateTypeFilter,isSelected : boolean}[] = [];
  callHistoryLs : CallHistoryType[] = [];
  filteredHistory : CallHistoryType[] = [];
  callLogTypeLs : {name : string,calls : number , icon : string}[] =[] ;
  averageTalkTime : string = '';
  totalTalkTime : string ='';
  constructor(private http : HttpService) { }

  ngOnInit() {
    this.setFIlterList();
  }

  setFIlterList()
  {
    this.filterLs = [
      { text : 'Today' , id : DateTypeFilter.TODAY , isSelected : true } ,
      { text : 'Last 7 Days' , id : DateTypeFilter.LAST7DAYS , isSelected : false } ,
      { text : 'Last 30 Days' , id : DateTypeFilter.LAST30DAYS , isSelected : false } ,
    ];
    this.callHistoryLs = CALL_HISTORY_JSON;
    this.filteredHistory = CALL_HISTORY_JSON;
    this.onSelectFIlter(DateTypeFilter.TODAY);
  }

  onSelectFIlter(pType : string)
  {
    this.filterLs.map(filter => filter.isSelected = filter.id == pType);
    switch(pType) {
      case DateTypeFilter.LAST7DAYS : {
        let last7DaysStartDate = new Date();
        last7DaysStartDate.setDate(last7DaysStartDate.getDate() - 7);
        this.filteredHistory = this.callHistoryLs.filter(call => new Date(call.timestamp) >= last7DaysStartDate);
        break;
      }
      case DateTypeFilter.LAST30DAYS : {
        let last30DaysStartDate = new Date();
        last30DaysStartDate.setDate(last30DaysStartDate.getDate() - 30);
        this.filteredHistory = this.callHistoryLs.filter(call => new Date(call.timestamp) >= last30DaysStartDate);
        break;
      }
      default :{
        let todayDate = new Date().toISOString().split('T')[0];
        this.filteredHistory = this.callHistoryLs.filter(log => log.timestamp.startsWith(todayDate));
        break;
      }
    }
    this.calculateCalls();
    this.calculateAverageTalkTime();
    this.calculateTotalTalkTime();
  }

  calculateCalls()
  {
    this.callLogTypeLs = [
      { name : 'Recieved' , calls : this.filteredHistory.filter(call => call.status == CALL_TYPE.RECEIVED).length, icon : 'arrow-down-outline' },
      { name : 'Missed' , calls : this.filteredHistory.filter(call => call.status == CALL_TYPE.MISSED).length, icon : 'trending-down-outline' },
      { name : 'Answered' , calls : this.filteredHistory.filter(call => call.status == CALL_TYPE.ANSWERED).length, icon : 'call' },
      { name : 'Incoming Personal' , calls : this.filteredHistory.filter(call => call.status == CALL_TYPE.INCOMING_PERSONAL).length, icon : 'person' },
    ];
  }

  calculateAverageTalkTime()
  {
    let totalDurationInSeconds = 0;
    let numberOfCalls = this.filteredHistory.length;
    this.filteredHistory.forEach(call => {
      let [hours, minutes, seconds] = call.duration.split(':').map(Number);
      totalDurationInSeconds += hours * 3600 + minutes * 60 + seconds;
    });
    let overallAverageCallTimeInSeconds = numberOfCalls > 0 ? totalDurationInSeconds / numberOfCalls : 0;
    let hours = Math.floor(overallAverageCallTimeInSeconds / 3600);
    let minutes = Math.floor((overallAverageCallTimeInSeconds % 3600) / 60);
    let seconds = Math.floor(overallAverageCallTimeInSeconds % 60);
    this.averageTalkTime = '';
    this.averageTalkTime = hours ? hours+'hrs ' + minutes+'m ' + seconds+'s' : minutes ? minutes+'m ' + seconds+'s' : seconds ? seconds+'s' : 'N/A' 
  }

  calculateTotalTalkTime()
  {
    let totalDurationInSeconds : number =0;
    this.filteredHistory.forEach(call => {
      const [hours, minutes, seconds] = call.duration.split(':').map(Number);
      totalDurationInSeconds += hours * 3600 + minutes * 60 + seconds;
    });
    let hours = Math.floor(totalDurationInSeconds / 3600);
    let minutes = Math.floor((totalDurationInSeconds % 3600) / 60);
    let seconds = Math.floor(totalDurationInSeconds % 60);
    this.totalTalkTime= hours ? hours+'hrs ' + minutes+'m ' + seconds+'s' : minutes ? minutes+'m ' + seconds+'s' : seconds ? seconds+'s' : 'N/A' 
  }

}
