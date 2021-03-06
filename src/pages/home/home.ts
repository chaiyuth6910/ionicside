import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

/* Sale Summary Page */
// import { SalesummaryPage } from '../../pages/salesummary/salesummary';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }

  openSaleSummary(){
    this.navCtrl.push('SalesummaryPage',{
      fullname:"Samit Koyom",
      email:"samitkoyom@gmail.com"
    });
  }

  openFirebaseForm(){
    this.navCtrl.push('FirebaseformPage');
  }

  openCameraForm(){
    this.navCtrl.push('CameraformPage');
  }

  openBarcodeForm()
  {
    this.navCtrl.push('BarcodeformPage');
  }

}
