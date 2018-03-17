import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesummaryPage } from './salesummary';

@NgModule({
  declarations: [
    SalesummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesummaryPage),
  ],
})
export class SalesummaryPageModule {}
