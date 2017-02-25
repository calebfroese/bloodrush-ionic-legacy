import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {HomeComponent} from '../pages/home/home.component';
import {LeagueModule} from '../pages/league/league.module';
import {SeasonComponent} from '../pages/season/season.component';
import {TabsComponent} from '../pages/tabs/tabs.component';

import {MyApp} from './app.component';
import {ApiService} from './shared/api/api.service';
import {LeagueService} from './shared/api/league.service';

@NgModule({
  declarations: [MyApp, SeasonComponent, HomeComponent, TabsComponent],
  imports: [IonicModule.forRoot(MyApp), LeagueModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, SeasonComponent, HomeComponent, TabsComponent],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, LeagueService,
    ApiService
  ]
})
export class AppModule {
}
