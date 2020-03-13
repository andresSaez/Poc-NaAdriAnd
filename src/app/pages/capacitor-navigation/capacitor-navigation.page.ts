import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { StartNavigationPlugin } = Plugins;

@Component({
    selector: 'app-capacitor-navigation',
    templateUrl: './capacitor-navigation.page.html',
    styleUrls: ['./capacitor-navigation.page.scss']
})
export class CapacitorNavigationPage implements OnInit {
    lat = 38.41;
    lng = -0.725;

    constructor() {}

    ngOnInit() {
        this.startNavigation();
    }

    startNavigation() {
        StartNavigationPlugin.launchMapsApp({
            latitude: this.lat,
            longitude: this.lng,
            name: 'Directions example'
        });
    }
}
