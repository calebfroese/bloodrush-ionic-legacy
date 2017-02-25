import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import * as moment from 'moment';
import {SeasonService} from '../../app/shared/api/season.service';
import {TeamService} from '../../app/shared/api/team.service';
import {Config} from '../../app/shared/config';
import {environment} from '../../environment/environment';

@Component({selector: 'page-season', templateUrl: 'season.component.html'})
export class SeasonComponent {
  season: any;
  config = Config;
  envName = environment.envName;
  teams: any[] = [];
  constructor(
      public navCtrl: NavController, public seasonService: SeasonService,
      public teamService: TeamService, public params: NavParams) {
    let sId = this.params.get('seasonId') || this.params.get('season') ?
        this.params.get('season').id :
        null;
    if (sId) {
      this.loadSeason(sId);
    }
  }
  loadSeason(id: string): void {
    this.seasonService.getSeasonById(id).then(s => {
      this.season = s;
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
}
