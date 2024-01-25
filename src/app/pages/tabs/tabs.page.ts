import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.css'],
})
@ExceptionHandler
export class TabsPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  async navigate(pPath:string)
{
  await this.navController.navigateRoot(pPath);
}

}
