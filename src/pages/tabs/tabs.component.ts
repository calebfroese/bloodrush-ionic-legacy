import {Component} from '@angular/core';

import {AboutComponent} from '../about/about.component';
import {ContactComponent} from '../contact/contact.component';
import {HomeComponent} from '../home/home.component';

@Component({templateUrl: 'tabs.component.html'})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeComponent;
  tab2Root: any = AboutComponent;
  tab3Root: any = ContactComponent;

  constructor() {}
}
