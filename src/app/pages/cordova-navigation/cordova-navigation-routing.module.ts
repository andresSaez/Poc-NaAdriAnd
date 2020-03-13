import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordovaNavigationPage } from './cordova-navigation.page';

const routes: Routes = [
    {
        path: '',
        component: CordovaNavigationPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CordovaNavigationPageRoutingModule {}
