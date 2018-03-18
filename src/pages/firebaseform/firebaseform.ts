import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Product } from '../../model/productModel'
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-firebaseform',
  templateUrl: 'firebaseform.html',
})
export class FirebaseformPage {

  product: Product = {
    name: '',
    price: '',
    desc:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebaseformPage');
  }

  SendProduct(product: Product)
  {
    this.db.list('product').push(product);
  }

}
