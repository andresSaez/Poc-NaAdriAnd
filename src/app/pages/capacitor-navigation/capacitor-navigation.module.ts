import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitorNavigationPageRoutingModule } from './capacitor-navigation-routing.module';

import { CapacitorNavigationPage } from './capacitor-navigation.page';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, CapacitorNavigationPageRoutingModule],
    declarations: [CapacitorNavigationPage]
})
export class CapacitorNavigationPageModule {}
