import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirebaseformPage } from './firebaseform';

@NgModule({
  declarations: [
    FirebaseformPage,
  ],
  imports: [
    IonicPageModule.forChild(FirebaseformPage),
  ],
})
export class FirebaseformPageModule {}
