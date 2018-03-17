import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Import สำหรับติดต่อ Web Service */
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';

/* Tabs Menu */
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CoursePage } from '../pages/course/course';
import { ServicePage } from '../pages/service/service';
import { ArticlePage } from '../pages/article/article';
import { ContactPage } from '../pages/contact/contact';

/* Side Menu */
import { SchedulePage } from '../pages/schedule/schedule';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PaymentPage } from '../pages/payment/payment';
import { SettingPage } from '../pages/setting/setting';

/* Sale Summary Page */
import { SalesummaryPage } from '../pages/salesummary/salesummary';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    TabsPage,
    CoursePage,
    ServicePage,
    ArticlePage,
    ContactPage,
    SalesummaryPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    PortfolioPage,
    PaymentPage,
    SettingPage,
    TabsPage,
    CoursePage,
    ServicePage,
    ArticlePage,
    ContactPage,
    SalesummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
