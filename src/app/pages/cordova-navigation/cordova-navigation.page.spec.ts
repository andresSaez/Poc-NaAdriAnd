import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CordovaNavigationPage } from './cordova-navigation.page';

describe('CordovaNavigationPage', () => {
    let component: CordovaNavigationPage;
    let fixture: ComponentFixture<CordovaNavigationPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CordovaNavigationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CordovaNavigationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
