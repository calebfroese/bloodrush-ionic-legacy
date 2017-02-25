import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {TeamService} from '../../../app/shared/api/team.service';
import {environment} from '../../../environment/environment';
import {Config} from '../../../app/shared/config';
import {SeasonComponent} from '../../season/season.component';
import {TeamComponent} from '../../team/team.component';

@Component({templateUrl: 'detail.component.html'})
export class DetailComponent {
  league: any;
  teams: any[];
  config = Config;
  envName = environment.envName;
  constructor(
      public params: NavParams, public teamService: TeamService,
      public navCtrl: NavController) {
    this.league = this.params.get('league');
    this.teamService.getTeams(this.league.teamIds).then(teams => {
      this.teams = teams;
    });
  }
  viewSeason(season: any): void {
    this.navCtrl.push(SeasonComponent, {season: season});
  }
  viewTeam(team: any): void {
    this.navCtrl.push(TeamComponent, {team: team});
  }
}