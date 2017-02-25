import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import {ApiService} from '../shared/api/api.service';
import {LeagueService} from '../shared/api/league.service';

import {DetailComponent} from './detail/detail.component';
import {LeagueComponent} from './league.component';

@NgModule({
  imports: [IonicModule],
  declarations: [LeagueComponent, DetailComponent],
  entryComponents: [LeagueComponent, DetailComponent],
  exports: [LeagueComponent]
})
export class LeagueModule {
}
