import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-barcodeform',
  templateUrl: 'barcodeform.html',
})
export class BarcodeformPage {

  data = [];

 constructor(private barcodeScanner:BarcodeScanner, public navCtrl: NavController) {}

 scan(){
   this.barcodeScanner.scan().then((barcodeData) =>{
      // Success ! Barcode data is here
      this.data.push(barcodeData.text);
   },(err) => {
       // An error occured
   });
 }

}
