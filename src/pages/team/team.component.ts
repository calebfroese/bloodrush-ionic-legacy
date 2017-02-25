import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({templateUrl: 'team.component.html'})
export class TeamComponent {
  team: any;
  constructor(public params: NavParams) {
    this.team = this.params.get('team');
  }
}