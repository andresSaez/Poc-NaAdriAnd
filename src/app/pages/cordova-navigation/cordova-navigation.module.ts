import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CordovaNavigationPageRoutingModule } from './cordova-navigation-routing.module';

import { CordovaNavigationPage } from './cordova-navigation.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CordovaNavigationPageRoutingModule],
    declarations: [CordovaNavigationPage]
})
export class CordovaNavigationPageModule {}
