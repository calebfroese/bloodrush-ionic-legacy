import {Component} from '@angular/core';
import {LoadingController} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {NavController} from 'ionic-angular';

import {AccountService} from '../../app/shared/account.service';
import {LoginComponent} from '../login/login.component';
import {Config} from '../../app/shared/config';
import {environment} from '../../environment/environment';

@Component({selector: 'page-home', templateUrl: 'home.component.html'})
export class HomeComponent {
  config = Config;
  envName = environment.envName;

  constructor(
      public navCtrl: NavController, public modalCtrl: ModalController,
      public acc: AccountService, public loadCtrl: LoadingController) {}


  openLogin(): void {
    let modal = this.modalCtrl.create(LoginComponent);
    modal.present();
  }
  logout(): void {
    let loader = this.loadCtrl.create({content: 'Logging out...'});
    loader.present();
    this.acc.logout()
        .then(() => {
          loader.dismiss();
        })
        .catch(() => {
          loader.dismiss();
        })
  }
}
