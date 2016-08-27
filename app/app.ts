import {Component, ViewChild} from '@angular/core';
import {App, ionicBootstrap, Platform, MenuController, Nav, Modal} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomeController} from './pages/home/home-controller';
import {ListPage} from './pages/list/list';

@Component({
    templateUrl: 'build/app.html'
})

class StartApp {
    private rootPage: any = HomeController;
    private pages: Array<{title: string, component: any}>;
    private platform: Platform;

    @ViewChild(Nav) nav: Nav;

    constructor (
        platform: Platform
    ) {
        this.platform = platform;
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(StartApp, [], {
    statusbarPadding: true,
    platforms: {
        android: {
            activator: 'ripple',
            backButtonIcon: 'md-arrow-back'
        }
    }
});
