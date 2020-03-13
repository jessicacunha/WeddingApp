import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmarPage } from '../confirmar/confirmar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToConfirmarPage() {
    console.log(`ok`);
    this.navCtrl.push(ConfirmarPage);
  }

}
