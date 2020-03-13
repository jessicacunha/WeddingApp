import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-confirmar',
  templateUrl: 'confirmar.html',
})
export class ConfirmarPage {

  product: any = {
    nome: '',
    telefone: '',
    quantidade: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private httpService: HttpServiceProvider) { }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarPage');
  }

  createProduct() {
    if (this.product.nome == '' || this.product.telefone == '' || this.product.quantidade == '') {
      const alert = this.alertCtrl.create({
        subTitle: 'Todos campos obrigatorios.',
        buttons: ['Ok']
      });
      alert.present();
    } else
      this.httpService.post('products', this.product).subscribe(res => {
        const alert = this.alertCtrl.create({
          subTitle: 'Confirmacao enviada para os noivos.',
          buttons: [
            {
            text: 'Ok',
            handler: () => {
              this.navCtrl.pop();
            }
          }]
        });
        alert.present();
      }, err => {
        const alert = this.alertCtrl.create({
          subTitle: err.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }
}
