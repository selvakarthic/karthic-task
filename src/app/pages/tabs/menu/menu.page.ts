import { Component, OnInit } from '@angular/core';
import { MENU_LIST, MENU_MODEL } from './menu-data';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.css'],
})
@ExceptionHandler
export class MenuPage implements OnInit {

  menuLs : MENU_MODEL[] =[]
  constructor() { }

  ngOnInit() {
    this.menuLs = MENU_LIST;
  }

}
