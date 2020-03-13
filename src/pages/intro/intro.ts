import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;
  currentSlide: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

  slideChanged() {
    this.currentSlide = this.slides.getActiveIndex();
    if (this.slides.getActiveIndex() > 1){
      setTimeout(() => {
        this.goToTabsPage();
      },1000)
    }
  }
}
