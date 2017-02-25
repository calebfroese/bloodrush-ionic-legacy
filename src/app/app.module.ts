import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {HomeComponent} from '../pages/home/home.component';
import {LeagueModule} from '../pages/league/league.module';
import {SeasonModule} from '../pages/season/season.module';
import {TabsComponent} from '../pages/tabs/tabs.component';
import {TeamComponent} from '../pages/team/team.component';

import {MyApp} from './app.component';
import {ApiService} from './shared/api/api.service';
import {LeagueService} from './shared/api/league.service';
import {SeasonService} from './shared/api/season.service';
import {TeamService} from './shared/api/team.service';

@NgModule({
  declarations: [MyApp, HomeComponent, TabsComponent, TeamComponent],
  imports: [IonicModule.forRoot(MyApp), LeagueModule, SeasonModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomeComponent, TabsComponent, TeamComponent],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, SeasonService,
    LeagueService, TeamService, ApiService
  ]
})
export class AppModule {
}
