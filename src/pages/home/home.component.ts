import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {NavController} from 'ionic-angular';

import {LoginComponent} from '../login/login.component';

@Component({selector: 'page-home', templateUrl: 'home.component.html'})
export class HomeComponent {
  constructor(
      public navCtrl: NavController, public modalCtrl: ModalController) {}
  openLogin(): void {
    let modal = this.modalCtrl.create(LoginComponent);
    modal.present();
  }
}
