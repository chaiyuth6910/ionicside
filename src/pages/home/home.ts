import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* Sale Summary Page */
import { SalesummaryPage } from '../../pages/salesummary/salesummary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  openSaleSummary(){
    this.navCtrl.push(SalesummaryPage,{
      fullname:"Samit Koyom",
      email:"samitkoyom@gmail.com"
    });
  }

}
