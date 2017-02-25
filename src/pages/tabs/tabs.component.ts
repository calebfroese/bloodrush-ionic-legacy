import {Component} from '@angular/core';

import {HomeComponent} from '../home/home.component';
import {LeagueComponent} from '../league/league.component';
import {SeasonComponent} from '../season/season.component';

@Component({templateUrl: 'tabs.component.html'})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomeComponent;
  tab2Root: any = SeasonComponent;
  tab3Root: any = LeagueComponent;

  constructor() {}
}
