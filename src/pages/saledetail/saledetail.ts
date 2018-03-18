import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// เรียกใช้งาน HttpClient  ไว้สำหรับติดต่อ Web API
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-saledetail',
  templateUrl: 'saledetail.html',
})
export class SaledetailPage {

  getpid:number;
  baseURL:string;
  pdetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.getpid = navParams.get('pid');
    this.baseURL = "http://localhost/saleproductapi/showsale_by_id.php?id="+this.getpid;
  }

  ionViewDidLoad() {
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data: any) => {
        this.pdetail = data
      }
    )
  }

}
