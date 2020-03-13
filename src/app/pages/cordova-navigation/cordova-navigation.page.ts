import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';

@Component({
    selector: 'app-cordova-navigation',
    templateUrl: './cordova-navigation.page.html',
    styleUrls: ['./cordova-navigation.page.scss']
})
export class CordovaNavigationPage implements OnInit {
    lat = 38.41;
    lng = -0.725;
    constructor(private launchNavigator: LaunchNavigator) {}

    ngOnInit() {
        this.navigate();
    }

    async navigate() {
        const options: LaunchNavigatorOptions = {};

        await this.launchNavigator.navigate([this.lat, this.lng], options);
    }
}
