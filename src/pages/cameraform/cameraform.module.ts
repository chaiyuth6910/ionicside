import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraformPage } from './cameraform';

@NgModule({
  declarations: [
    CameraformPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraformPage),
  ],
})
export class CameraformPageModule {}
