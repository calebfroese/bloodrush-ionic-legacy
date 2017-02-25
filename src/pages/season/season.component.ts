import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ApiService} from '../../app/shared/api/api.service';

@Component({selector: 'page-season', templateUrl: 'season.component.html'})
export class SeasonComponent implements OnInit {
  constructor(public navCtrl: NavController, public api: ApiService) {}

  ngOnInit(): void {
    // Load the season
    
  }
}
