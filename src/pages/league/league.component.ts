import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {LeagueService} from '../../app/shared/api/league.service';

import {DetailComponent} from './detail/detail.component';

@Component({selector: 'page-league', templateUrl: 'league.component.html'})
export class LeagueComponent implements OnInit {
  leagues: any[];
  constructor(
      public navCtrl: NavController, public leagueService: LeagueService) {}
  ngOnInit(): void {
    this.leagueService.getLeague()
        .then(l => {
          this.leagues = l;
        })
        .catch(err => {
          debugger;
        })
  }
  viewLeague(league: any): void {
    this.navCtrl.push(DetailComponent, {league: league});
  }
}
