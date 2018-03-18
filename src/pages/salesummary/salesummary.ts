import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// เรียกใช้งาน HttpClient  ไว้สำหรับติดต่อ Web API
import { HttpClient } from '@angular/common/http';

/* Sale Detail */
// import { SaledetailPage  } from '../../pages/saledetail/saledetail';

@IonicPage()
@Component({
  selector: 'page-salesummary',
  templateUrl: 'salesummary.html',
})
export class SalesummaryPage {

  //fullname:string;
  // email:string;
  // กำหนดตัวแปรเก็บ  URL ของเว็บ
  baseURL:string;
  product:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.baseURL = "http://localhost/saleproductapi/showsale_summary.php";
    // this.fullname = navParams.get('fullname');
    // this.email = navParams.get('email');
  }

  ionViewDidLoad() {
    let ob = this.http.get(this.baseURL);
    ob.subscribe(
      (data: any) => {
        this.product = data
      }
    )
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {

      let ob = this.http.get(this.baseURL);
      ob.subscribe(
        (data: any) => {
          this.product = data
        }
      )

      console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
  }


  // method ในการดึงข้อมูลตามหมายเลข id ที่ส่งมา
  saleDetail(id){
    this.navCtrl.push('SaledetailPage',{
      pid:id
    });
  }

}
