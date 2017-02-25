import {Component, NgZone} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {AlertController} from 'ionic-angular/components/alert/alert';
import {LoadingController} from 'ionic-angular/components/loading/loading';

import {AccountService} from '../../app/shared/account.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
      public viewCtrl: ViewController, public acc: AccountService,
      public loadCtrl: LoadingController, public alertCtrl: AlertController,
      public zone: NgZone) {}

  dismiss(): void {
    this.viewCtrl.dismiss();
  }

  login(username: string, password: string): void {
    let loader = this.loadCtrl.create({content: 'Logging in...'})
    loader.present();
    this.acc.login(username, password)
        .then(() => {
          return this.acc.loadTeam();
        })
        .then(() => {
          // Success
          loader.dismiss();
          this.viewCtrl.dismiss();
          this.zone.run(() => {});
        })
        .catch(err => {
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Unable to log in with those credentials',
            buttons: ['OK']
          });
          alert.present();
          this.password = '';
        })
  }
}