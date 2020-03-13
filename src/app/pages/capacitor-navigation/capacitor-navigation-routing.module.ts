import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitorNavigationPage } from './capacitor-navigation.page';

const routes: Routes = [
    {
        path: '',
        component: CapacitorNavigationPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CapacitorNavigationPageRoutingModule {}
