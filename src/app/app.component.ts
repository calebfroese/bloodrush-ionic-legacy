import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Splashscreen, StatusBar} from 'ionic-native';

import {TabsComponent} from '../pages/tabs/tabs.component';


@Component({templateUrl: 'app.component.html'})
export class MyApp {
  rootPage = TabsComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
