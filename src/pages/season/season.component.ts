import {Component} from '@angular/core';
import {NavOptions, PopoverController} from 'ionic-angular';
import {NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';

import {AccountService} from '../../app/shared/account.service';
import {SeasonService} from '../../app/shared/api/season.service';
import {TeamService} from '../../app/shared/api/team.service';
import {Config} from '../../app/shared/config';
import {environment} from '../../environment/environment';

import {PopoverComponent} from './popover/popover.component';

@Component({selector: 'page-season', templateUrl: 'season.component.html'})
export class SeasonComponent {
  season: any;
  games: any[] = [];
  config = Config;
  envName = environment.envName;
  teams: any[] = [];

  constructor(
      public navCtrl: NavController, public seasonService: SeasonService,
      public teamService: TeamService, public params: NavParams,
      public popCtrl: PopoverController, public acc: AccountService) {
    let sId = this.params.get('seasonId') || this.params.get('season') ?
        this.params.get('season').id :
        this.acc.seasonId ? this.acc.seasonId : null;
    if (sId) {
      this.loadSeason(sId);
    }
  }

  loadSeason(id: string): void {
    this.seasonService.getSeasonById(id).then(s => {
      this.season = s;
      // Load games
      this.games = s.games;
      // Load teams
      this.loadTeams();
    });
  }

  loadTeams(): void {
    this.teamService.getTeam('').then(teams => {
      teams.forEach(t => {
        this.teams[t.id] = t;
      });
    });
  }

  momentify(date: any): string {
    return moment(date).format('MMM Do');
  }

  popover(navOptions: NavOptions = {}): void {
    let popover = this.popCtrl.create(PopoverComponent);
    console.log(navOptions);
    popover.present(navOptions);
  }
}
