import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

// import {ApiService} from '../shared/api/api.service';
// import {LeagueService} from '../shared/api/league.service';

import {GamePipe} from './game/game.pipe';
import {PopoverComponent} from './popover/popover.component';
import {SeasonComponent} from './season.component';

@NgModule({
  imports: [IonicModule],
  declarations: [SeasonComponent, PopoverComponent, GamePipe],
  entryComponents: [SeasonComponent, PopoverComponent],
  exports: [SeasonComponent]
})
export class SeasonModule {
}
