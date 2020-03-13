import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CapacitorNavigationPage } from './capacitor-navigation.page';

describe('CapacitorNavigationPage', () => {
    let component: CapacitorNavigationPage;
    let fixture: ComponentFixture<CapacitorNavigationPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CapacitorNavigationPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CapacitorNavigationPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
