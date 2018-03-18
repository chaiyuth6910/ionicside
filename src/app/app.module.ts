import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Import สำหรับติดต่อ Web Service */
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';

/* Import  สำหรับเรียกใช้  Firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentails';

/* ส่วนของการเรียกใช้งานกล้อง */
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

/*ส่วนของการสแกนบาร์โค้ด*/
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/* Tabs Menu */
// import { TabsPage } from '../pages/tabs/tabs';
// import { HomePage } from '../pages/home/home';
// import { CoursePage } from '../pages/course/course';
// import { ServicePage } from '../pages/service/service';
// import { ArticlePage } from '../pages/article/article';
// import { ContactPage } from '../pages/contact/contact';

/* Side Menu */
// import { SchedulePage } from '../pages/schedule/schedule';
// import { PortfolioPage } from '../pages/portfolio/portfolio';
// import { PaymentPage } from '../pages/payment/payment';
// import { SettingPage } from '../pages/setting/setting';

/* Sale Summary Page */
// import { SalesummaryPage } from '../pages/salesummary/salesummary';
/* Sale Detail */
// import { SaledetailPage  } from '../pages/saledetail/saledetail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // SchedulePage,
    // PortfolioPage,
    // PaymentPage,
    // SettingPage,
    // TabsPage,
    // CoursePage,
    // ServicePage,
    // ArticlePage,
    // ContactPage,
    // SalesummaryPage,
    // SaledetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // SchedulePage,
    // PortfolioPage,
    // PaymentPage,
    // SettingPage,
    // TabsPage,
    // CoursePage,
    // ServicePage,
    // ArticlePage,
    // ContactPage,
    // SalesummaryPage,
    // SaledetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    Transfer,
    Camera,
    FilePath,
    BarcodeScanner
  ]
})
export class AppModule { }
